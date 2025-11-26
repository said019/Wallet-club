import React, { useState } from 'react';

const PricingCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 499,
      description: 'Ideal para negocios pequeños o quienes inician.',
      features: [
        '1 tarjeta digital',
        'Sellos / visitas',
        'Notificaciones básicas',
        'Diseño simple',
        'Hasta 300 clientes'
      ],
      popular: false
    },
    {
      id: 'negocios',
      name: 'Negocios',
      price: 699,
      description: 'El más vendido. Perfecto para negocios activos.',
      features: [
        'Hasta 3 tarjetas',
        'Diseño premium',
        'Notificaciones ilimitadas',
        'Hasta 1,500 clientes',
        'Soporte prioritario',
        'Revisión mensual'
      ],
      popular: true
    },
    {
      id: 'agenda',
      name: 'Agenda & Citas',
      price: 1299,
      description: 'Para negocios que requieren agenda y recordatorios.',
      features: [
        'Tarjetas digitales + visitas',
        'Agenda Google Calendar',
        'Recordatorios por WhatsApp',
        'Confirmaciones y reprogramaciones',
        'Configuración completa',
        'Soporte premium'
      ],
      popular: false
    }
  ];

  // WalletClub brand colors extracted from logo
  const colors = {
    primary: '#4A9D7C',      // Verde principal del logo
    primaryDark: '#3D8268',  // Verde hover
    dark: '#1E3A34',         // Verde oscuro/negro del logo
    cream: '#F8F6F3',        // Fondo crema del logo
    white: '#FFFFFF'
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: colors.cream,
      padding: '64px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header with Logo Icon */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        {/* Wallet Icon matching logo style */}
        <div style={{ marginBottom: '20px' }}>
          <svg width="72" height="56" viewBox="0 0 72 56" fill="none" style={{ margin: '0 auto', display: 'block' }}>
            <rect x="3" y="3" width="66" height="50" rx="10" stroke={colors.dark} strokeWidth="4" fill="none"/>
            <rect x="6" y="6" width="60" height="26" rx="7" fill={colors.primary}/>
            <rect x="6" y="30" width="60" height="20" rx="7" fill={colors.primary}/>
            <line x1="6" y1="32" x2="66" y2="32" stroke={colors.dark} strokeWidth="2"/>
            <circle cx="22" cy="43" r="4" fill={colors.dark}/>
            <circle cx="36" cy="43" r="4" fill={colors.dark}/>
            <circle cx="50" cy="43" r="4" fill={colors.dark}/>
          </svg>
        </div>
        
        <h1 style={{ 
          fontSize: '2.25rem', 
          fontWeight: '800', 
          color: colors.dark,
          margin: '0 0 8px 0',
          letterSpacing: '-0.5px'
        }}>
          Planes y Precios
        </h1>
        <p style={{ 
          fontSize: '1.0625rem', 
          color: '#666',
          margin: 0
        }}>
          Más visitas, sin apps ni papelitos.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            onMouseEnter={() => setHoveredCard(plan.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              position: 'relative',
              backgroundColor: plan.popular ? colors.dark : colors.white,
              borderRadius: '20px',
              padding: '36px 28px',
              boxShadow: plan.popular 
                ? '0 25px 50px -12px rgba(30, 58, 52, 0.35)' 
                : hoveredCard === plan.id 
                  ? '0 12px 28px rgba(0,0,0,0.12)'
                  : '0 2px 16px rgba(0,0,0,0.06)',
              transform: plan.popular 
                ? 'scale(1.03)' 
                : hoveredCard === plan.id 
                  ? 'translateY(-6px)' 
                  : 'translateY(0)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: plan.popular ? 'none' : `1px solid rgba(30, 58, 52, 0.08)`,
              zIndex: plan.popular ? 10 : 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: colors.primary,
                color: colors.white,
                padding: '6px 18px',
                borderRadius: '16px',
                fontSize: '0.8125rem',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(74, 157, 124, 0.4)',
                whiteSpace: 'nowrap'
              }}>
                ★ Más vendido
              </div>
            )}

            {/* Plan Name */}
            <h2 style={{
              textAlign: 'center',
              fontSize: '1.375rem',
              fontWeight: '700',
              color: plan.popular ? colors.white : colors.dark,
              margin: '0 0 6px 0'
            }}>
              Plan {plan.name}
            </h2>

            {/* Description */}
            <p style={{
              textAlign: 'center',
              fontSize: '0.875rem',
              color: plan.popular ? 'rgba(255,255,255,0.65)' : '#777',
              margin: '0 0 20px 0',
              lineHeight: '1.5'
            }}>
              {plan.description}
            </p>

            {/* Price */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                <span style={{
                  fontSize: '1.125rem',
                  color: plan.popular ? 'rgba(255,255,255,0.5)' : '#999',
                  marginRight: '2px'
                }}>$</span>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  color: plan.popular ? colors.primary : colors.dark,
                  lineHeight: 1
                }}>
                  {plan.price.toLocaleString()}
                </span>
              </div>
              <span style={{
                fontSize: '0.8125rem',
                color: plan.popular ? 'rgba(255,255,255,0.5)' : '#999'
              }}>
                MXN / mes
              </span>
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              backgroundColor: plan.popular ? 'rgba(255,255,255,0.1)' : 'rgba(30, 58, 52, 0.08)',
              margin: '0 0 20px 0'
            }}/>

            {/* Features */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 28px 0',
              flex: 1
            }}>
              {plan.features.map((feature, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    backgroundColor: plan.popular ? colors.primary : `rgba(74, 157, 124, 0.12)`,
                    borderRadius: '50%',
                    marginRight: '10px',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path 
                        d="M1.5 5L4 7.5L8.5 2.5" 
                        stroke={plan.popular ? colors.white : colors.primary}
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: plan.popular ? 'rgba(255,255,255,0.85)' : '#555',
                    lineHeight: '1.4'
                  }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              style={{
                width: '100%',
                padding: '14px 20px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '0.9375rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: plan.popular ? colors.primary : colors.dark,
                color: colors.white,
                boxShadow: plan.popular 
                  ? '0 4px 14px rgba(74, 157, 124, 0.35)'
                  : '0 4px 14px rgba(30, 58, 52, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.02)';
                e.target.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.opacity = '1';
              }}
            >
              Comenzar ahora
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '48px',
        color: '#777',
        fontSize: '0.875rem'
      }}>
        <p style={{ margin: '0 0 6px 0' }}>
          💬 Todos los planes incluyen soporte por WhatsApp
        </p>
        <p style={{ margin: 0, fontSize: '0.75rem', color: '#999' }}>
          Sin contratos a largo plazo • Cancela cuando quieras
        </p>
      </div>
    </div>
  );
};

export default PricingCards;
