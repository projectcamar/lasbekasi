import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import './WhatsAppButton.css'
import { trackEvent } from '../utils/analytics'
import MessageRenderer from './MessageRenderer'
import { detectLanguage, type LanguageCode } from '../utils/languageManager'
import { trackWhatsAppClick } from '../utils/whatsappTracking'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface UserInfo {
  name: string
  email: string
  isCompleted: boolean
}

const BENGKEL_CHAT = {
  subtitle: "Kami akan membalas secepat mungkin",
  initialMessage: "Hai 👋! Selamat datang di Bengkel Las Mandiri. Ada yang bisa kami bantu?\n\nHubungi kami via WhatsApp di [+6285212078467](https://wa.me/+6285212078467)",
  continueWhatsApp: "Lanjutkan di WhatsApp",
  typeMessage: "Ketik pesan Anda...",
  contactUs: "Hubungi Kami",
  formIntro: "Silakan tinggalkan detail Anda agar kami dapat menghubungi Anda.",
  nameLabel: "Nama",
  namePlaceholder: "Masukkan nama lengkap",
  submit: "Kirim",
  thankYouMessage: (name: string) => `Terima kasih, ${name}! Kami siap membantu kebutuhan las Anda. Ada yang bisa kami bantu hari ini?`,
  whatsappRedirectMessage: "Halo, saya tertarik dengan jasa las di Bengkel Las Mandiri. Bisa konsultasi?",
  simpleResponses: [
    "Terima kasih atas pertanyaan Anda! Untuk informasi lebih lanjut tentang layanan las kami (kanopi, pagar, teralis, konstruksi baja), silakan hubungi kami langsung di WhatsApp.",
    "Kami senang bisa membantu! Untuk konsultasi desain dan penawaran harga, silakan hubungi tim kami di WhatsApp.",
    "Pertanyaan yang bagus! Tim kami akan dengan senang hati membantu Anda. Silakan hubungi kami di WhatsApp untuk info lengkap."
  ]
};

const CHAT_TRANSLATIONS: Record<LanguageCode, typeof BENGKEL_CHAT> = {
  id: BENGKEL_CHAT,
  en: BENGKEL_CHAT,
  ar: BENGKEL_CHAT,
  zh: BENGKEL_CHAT,
  ja: BENGKEL_CHAT,
  es: BENGKEL_CHAT,
  fr: BENGKEL_CHAT,
  ko: BENGKEL_CHAT,
};


const WhatsAppButton: React.FC = () => {
  const location = useLocation()

  // Hide on Admin pages
  if (location.pathname.startsWith('/admin')) {
    return null
  }

  const [isExpanded, setIsExpanded] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>('id')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hai! Ada yang bisa kami bantu untuk kebutuhan las Anda di Bengkel Las Mandiri?',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    isCompleted: false
  })
  const [firstMessage, setFirstMessage] = useState('')
  const [conversationStage, setConversationStage] = useState<'greeting' | 'collecting_info' | 'assisting'>('collecting_info')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Get translations for current language
  const t = CHAT_TRANSLATIONS[language] ?? CHAT_TRANSLATIONS.id

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Language detection effect - respects user's language choice from Header
  useEffect(() => {
    const initLanguage = async () => {
      try {
        const lang = await detectLanguage(location.pathname, location.search)
        setLanguage(lang)

        // Update initial message based on detected language
        const translations = CHAT_TRANSLATIONS[lang] ?? CHAT_TRANSLATIONS.id
        setMessages([{
          id: '1',
          text: translations.initialMessage,
          isUser: false,
          timestamp: new Date()
        }])
      } catch (error) {
        console.log('Language detection failed, using default')
      }
    }

    initLanguage()
  }, [location.pathname, location.search])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleExpand = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      trackEvent.whatsappClick('expand_chat')
    }
  }

  const handleWhatsAppRedirect = () => {
    trackEvent.whatsappClick('redirect_to_whatsapp')
    trackWhatsAppClick('chatbot_continue_to_whatsapp', {
      userInfo: userInfo.isCompleted ? { name: userInfo.name, email: userInfo.email } : null
    })
    const whatsappMessage = t.whatsappRedirectMessage
    const whatsappUrl = `https://wa.me/+6285212078467?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }



  const generateSmartResponse = async (): Promise<string> => {
    // Simple response without AI - always redirect to WhatsApp
    return getSimpleResponse()
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (userInfo.name && userInfo.email) {
      setUserInfo(prev => ({ ...prev, isCompleted: true }))
      setConversationStage('assisting')

      // Send lead data to API
      try {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: userInfo.name,
            email: userInfo.email,
            firstMessage: firstMessage,
            language: language,
            notificationType: 'chatbot_lead'
          }),
        })
      } catch (error) {
        console.error('Failed to send lead data:', error)
      }

      const formMessage: Message = {
        id: Date.now().toString(),
        text: t.thankYouMessage(userInfo.name),
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, formMessage])
    }
  }



  const getSimpleResponse = (): string => {
    // Simple fallback responses without API key
    const responses = t.simpleResponses
    return responses[Math.floor(Math.random() * responses.length)]
  }


  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    // If user hasn't completed info, store the first message and show form
    if (!userInfo.isCompleted) {
      setFirstMessage(inputText)
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isUser: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, userMessage])
      setInputText('')
      // Form will show automatically since conversationStage is 'collecting_info'
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentMessage = inputText
    setInputText('')
    setIsLoading(true)

    try {
      const aiResponse = await generateSmartResponse()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, aiMessage])

      // Send email notification with the chat message
      try {
        await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: userInfo.name,
            email: userInfo.email,
            chatMessage: currentMessage,
            language: language,
            notificationType: 'chatbot_message'
          }),
        })
      } catch (emailError) {
        console.error('Failed to send chat message notification:', emailError)
      }
    } catch (error) {
      console.error('Error generating response:', error)
      // Use simple response for error
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSimpleResponse(),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="whatsapp-container">
      {/* Expanded Chat Interface */}
      {isExpanded && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <div className="chat-header-content">
              <div className="chat-title">
                <Bot size={16} />
                <span>Bengkel Las Mandiri</span>
              </div>
              <div className="chat-subtitle">
                {t.subtitle}
              </div>
            </div>
            <button className="close-chat" onClick={handleExpand} aria-label="Close chat">
              <X size={14} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.isUser ? 'user-message' : 'ai-message'}`}>
                <div className="message-avatar">
                  {message.isUser ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className="message-content">
                  <MessageRenderer text={message.text} />
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {/* Form UI for collecting info */}
            {conversationStage === 'collecting_info' && !userInfo.isCompleted && firstMessage && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={14} />
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {t.formIntro}
                  </div>
                  <form onSubmit={handleFormSubmit} className="info-form">
                    <div className="form-group">
                      <label>{t.nameLabel}</label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={t.namePlaceholder}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="email@anda.com"
                        required
                      />
                    </div>
                    <button type="submit" className="submit-form-btn">
                      {t.submit}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {isLoading && (
              <div className="message ai-message">
                <div className="message-avatar">
                  <Bot size={14} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.typeMessage}
              disabled={isLoading || Boolean(conversationStage === 'collecting_info' && firstMessage && !userInfo.isCompleted)}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading || Boolean(conversationStage === 'collecting_info' && firstMessage && !userInfo.isCompleted)}
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </div>

          <div className="chat-footer">
            <button className="whatsapp-redirect" onClick={handleWhatsAppRedirect} aria-label={t.continueWhatsApp}>
              <MessageCircle size={14} />
              <span>{t.continueWhatsApp}</span>
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={handleExpand} aria-label={t.contactUs}>
        <MessageCircle size={18} />
        <span>{t.contactUs}</span>
      </button>
    </div>
  )
}

export default WhatsAppButton
