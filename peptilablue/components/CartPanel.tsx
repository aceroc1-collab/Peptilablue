'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartContext';

const WHATSAPP_NUMBER = '584129987858';

function buildWhatsAppMessage(cart: ReturnType<typeof useCart>['cart'], total: number): string {
  const lines = cart.map(
    item => `• ${item.name} x${item.qty} — $${(item.price * item.qty).toFixed(2)}`
  );
  const msg = [
    '¡Hola PEPTILAB! Me interesa realizar el siguiente pedido:',
    '',
    ...lines,
    '',
    `*TOTAL: $${total.toFixed(2)} USD*`,
    '',
    'Por favor indíquenme disponibilidad y forma de pago. ¡Gracias!',
  ].join('\n');
  return encodeURIComponent(msg);
}

export default function CartPanel() {
  const { cart, cartTotal, removeFromCart, changeQty, isCartOpen, toggleCart } = useCart();

  const handleWhatsApp = () => {
    const msg = buildWhatsAppMessage(cart, cartTotal);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(5,13,26,0.85)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
          />

          <motion.div
            className="fixed right-0 top-0 h-full z-50 flex flex-col"
            style={{
              width: 'min(420px, 100vw)',
              background: 'var(--bg-card)',
              borderLeft: '1px solid rgba(30,58,138,0.35)',
              overflowY: 'auto',
            }}
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>

              {/* Header */}
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="font-playfair font-normal text-[1.7rem]" style={{ color: 'var(--white)' }}>
                    Tu Selección
                  </h2>
                  <p className="text-[0.45rem] tracking-[0.3rem] mt-1 font-montserrat" style={{ color: '#38BDF8' }}>
                    RESUMEN DEL PEDIDO
                  </p>
                </div>
                <button
                  onClick={toggleCart}
                  className="text-xl transition-colors duration-300 cursor-pointer bg-transparent border-0"
                  style={{ color: 'var(--steel)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--steel)')}
                >
                  ✕
                </button>
              </div>

              {/* Items */}
              <div className="flex-1">
                {cart.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ border: '1px solid rgba(30,58,138,0.3)', background: 'rgba(30,58,138,0.08)' }}>
                      <span style={{ color: 'var(--muted)', fontSize: '1.2rem' }}>◇</span>
                    </div>
                    <p className="text-[0.58rem] tracking-[0.3rem] font-montserrat" style={{ color: 'var(--muted)' }}>
                      TU CARRITO ESTÁ VACÍO
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-4 items-center p-4"
                        style={{ border: '1px solid rgba(30,58,138,0.2)', background: 'rgba(30,58,138,0.06)' }}>
                        <div className="flex-1 min-w-0">
                          <p className="font-playfair font-normal text-[1.05rem] leading-tight" style={{ color: 'var(--white)' }}>
                            {item.name}
                          </p>
                          <p className="font-mono text-sm mt-1" style={{ color: '#38BDF8' }}>
                            ${(item.price * item.qty).toFixed(2)} USD
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {['−', '+'].map((sym, di) => (
                            <button key={sym}
                              className="w-6 h-6 flex items-center justify-center transition-all duration-200 cursor-pointer bg-transparent"
                              style={{ border: '1px solid rgba(30,58,138,0.4)', color: 'var(--steel)' }}
                              onClick={() => changeQty(item.id, di === 0 ? -1 : 1)}
                              onMouseEnter={e => (e.currentTarget.style.borderColor = '#38BDF8')}
                              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(30,58,138,0.4)')}
                            >{sym}</button>
                          ))}
                          <span className="font-mono text-sm min-w-[20px] text-center" style={{ color: 'var(--white)' }}>
                            {item.qty}
                          </span>
                        </div>
                        <button
                          className="flex-shrink-0 cursor-pointer bg-transparent border-0 text-sm transition-colors duration-200"
                          style={{ color: 'var(--muted)' }}
                          onClick={() => removeFromCart(item.id)}
                          onMouseEnter={e => (e.currentTarget.style.color = '#38BDF8')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                        >✕</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(30,58,138,0.25)' }}>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[0.58rem] tracking-[0.3rem] font-montserrat" style={{ color: 'var(--steel)' }}>
                      TOTAL
                    </span>
                    <div className="text-right">
                      <span className="font-mono text-[1.6rem] font-bold" style={{ color: '#38BDF8' }}>
                        ${cartTotal.toFixed(2)}
                      </span>
                      <span className="font-montserrat text-[0.48rem] tracking-[0.15rem] ml-1" style={{ color: 'var(--muted)' }}>
                        USD
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-4 text-[0.6rem] tracking-[0.25rem] font-montserrat font-medium transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
                    style={{ background: '#25D366', color: '#fff', border: 'none', borderRadius: '2px' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5a')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.527 5.845L0 24l6.335-1.505A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.368l-.36-.213-3.732.886.948-3.63-.234-.373A9.795 9.795 0 012.182 12c0-5.419 4.399-9.818 9.818-9.818 5.42 0 9.818 4.399 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                    </svg>
                    ENVIAR PEDIDO POR WHATSAPP
                  </button>
                  <p className="text-center text-[0.42rem] tracking-[0.12rem] mt-3 font-montserrat" style={{ color: 'var(--muted)' }}>
                    SE ABRIRÁ WHATSAPP CON TU PEDIDO LISTO · +58 412-9987858
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
