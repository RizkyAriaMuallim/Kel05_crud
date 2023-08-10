import React from 'react'

const Modal = ({ isVisible, onClose, title }) => {
    if (!isVisible) return null;

    const handleClose = (e) => {
        if (e.target.id === 'wrap') onClose();
    }

    const handleDelete = async () => {
        await fetch('https://dummyjson.com/products/1', {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(console.log);
        onClose();
    }

  return (
    <div id='wrap' className='fixed inset-0 flex items-center justify-center transition-all delay-200 bg-opacity-25 backdrop-blur-sm'
    onClick={handleClose}>
        <div className='w-[600px] flex flex-col'>
            <div className='p-2 text-black bg-white rounded'>
                <div className='flex items-center justify-between mb-3'>
                    <h1 className="text-xl font-semibold">Delete this product</h1>
                </div>
                <div className='mb-3'>
                    <p>Are you sure want to delete {title}?</p>
                </div>
                <div className='flex items-center justify-center w-full space-x-3'>
                    <button type='button' className='px-4 py-1 text-emerald-600' onClick={handleDelete}>OK</button>
                    <button type='button'className='px-4 py-1 text-red-600' onClick={() => onClose()}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal