import "./_footer.scss";
export const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  footer.innerHTML = `
      <div class="footer__main">
            <p class="footer__copyright">  © ${new Date().getFullYear()} Newton • All Rights Reserved </p> 
            <div class="footer__techstack">
                <span class="label">Built with</span>
                <span class="footer__highlight">Vanilla TS</span>
                <span class="separator">&</span>
                <span class="footer__highlight">Vite</span>
                <span class="footer__emoji">✨</span>
            </div>
        </div>
    `;
  return footer;
};
