import { footerData } from "../../Constant/footerLinks";
import "./Footer.css";

 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title">متواجدین دائما لمساعدتك</h3>
        <div className="footer-top-email">
          <span className="footer-top-email-text">تواصل معانا عبر الإيميل</span>
          <span className="footer-top-email-address">
            <i className="bi bi-envelope"></i>
            store@fakeemail.com
          </span>
        </div>
      </div>

      <div className="footer-items-wrapper">
        {footerData.map((section, index) => (
          <div className="footer-item" key={index}>
            <h4 className="footer-item-title">{section.title}</h4>
            <ul className="footer-item-links">
              {section.links.map((link, i) => (
                <li className="footer-item-link" key={i}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <i className="bi bi-c-circle"></i> 2022 کل الحقوق محفوظه
      </div>
    </footer>
  );
};

export default Footer;
