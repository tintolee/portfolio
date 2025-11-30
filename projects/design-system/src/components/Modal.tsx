import React, { useEffect, useRef } from 'react';

export interface ModalProps {
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

export function Modal({ open, title, children, onClose }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose();
            if (e.key === 'Tab' && panelRef.current) {
                const focusables = panelRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                const list = Array.from(focusables).filter(el => !el.hasAttribute('disabled'));
                if (!list.length) return;
                const first = list[0];
                const last = list[list.length - 1];
                const active = document.activeElement as HTMLElement | null;
                if (e.shiftKey) {
                    if (active === first || !panelRef.current?.contains(active)) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (active === last || !panelRef.current?.contains(active)) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        }
        if (open) {
            document.addEventListener('keydown', onKey);
            // initial focus
            setTimeout(() => {
                const btn = panelRef.current?.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                btn?.focus();
            }, 0);
        }
        return () => document.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    if (!open) return null;
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 grid place-items-center"
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose();
            }}
        >
            <div ref={overlayRef} className="absolute inset-0 bg-black/40" />
            <div ref={panelRef} className="relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                <h2 id="modal-title" className="text-lg font-semibold">
                    {title}
                </h2>
                <div className="mt-3 text-sm text-gray-600">{children}</div>
                <div className="mt-6 flex justify-end">
                    <button
                        className="rounded-md bg-gray-900 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
