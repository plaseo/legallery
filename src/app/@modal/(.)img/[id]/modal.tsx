'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    
      <dialog
        ref={dialogRef}
        className="absolute w-full h-full bg-black/90 text-white"
        onClose={onDismiss}
      >
        <div className='relative'>
          <a className='absolute top-1/2 left-1/2 text-xl' onClick={onDismiss}>Close</a>
        </div>
        {children}
        
        
      </dialog>,
      
    
    document.getElementById('modal-root')!
  );
}