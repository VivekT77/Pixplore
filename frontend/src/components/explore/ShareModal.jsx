import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toast from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ShareModal = ({ isOpen, onRequestClose, url }) => {
  const handleShare = (platform) => {
    let shareUrl = '';
    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        onRequestClose(); // Close the modal after copying
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    if (shareUrl) {
      window.open(shareUrl, '_blank');
      onRequestClose(); // Close the modal after sharing
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed', top: '0', left: '0', right: '0', bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          backgroundColor: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center',
          position: 'relative', minWidth: '400px', maxWidth: '600px'
        }}>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={onRequestClose}
            style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', fontSize: '24px' }}
          />
          <h2 style={{ marginBottom: '20px' }}>Share this page</h2>
          <div style={{ fontSize: '28px' }}>
            <FontAwesomeIcon
              icon={faFacebookF}
              onClick={() => handleShare('facebook')}
              style={{ cursor: 'pointer', margin: '10px' }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              onClick={() => handleShare('twitter')}
              style={{ cursor: 'pointer', margin: '10px' }}
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              onClick={() => handleShare('whatsapp')}
              style={{ cursor: 'pointer', margin: '10px' }}
            />
          </div>
          <button
            onClick={
                () => handleShare('copy') 
            }
            style={{
              display: 'block', margin: '20px auto', padding: '10px 20px', fontSize: '16px',
              border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer'
            }}
          >
            Copy URL
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ShareModal;
