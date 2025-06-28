export function MsgError(text) {
  const msg = document.createElement('div');
  msg.textContent = text;
  Object.assign(msg.style, {
    color: '#f00',
    fontSize: '1.3rem',
    fontWeight: 'bolder'
  });
}
