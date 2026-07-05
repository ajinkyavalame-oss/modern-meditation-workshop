export const useTallyForm = () => {
  const openForm = () => {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'tally-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      padding: 16px;
    `;

    // Create modal container
    const container = document.createElement('div');
    container.style.cssText = `
      width: 100%;
      max-width: 600px;
      height: 90vh;
      max-height: 700px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    `;

    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      font-size: 32px;
      cursor: pointer;
      color: #666;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: color 0.2s ease;
    `;
    closeBtn.onmouseover = () => closeBtn.style.color = '#000';
    closeBtn.onmouseout = () => closeBtn.style.color = '#666';

    // Create iframe
    const iframe = document.createElement('iframe');
    iframe.src = 'https://6mcqtwjncf.zite.so';
    iframe.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      margin: 0;
      padding: 0;
    `;
    iframe.title = 'Join Free Intro to Meditation & Breath Workshop';

    // Close modal on button click
    closeBtn.onclick = () => modal.remove();

    // Close modal on overlay click
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };

    // Append elements
    container.appendChild(closeBtn);
    container.appendChild(iframe);
    modal.appendChild(container);
    document.body.appendChild(modal);
  };

  return { openForm };
};


