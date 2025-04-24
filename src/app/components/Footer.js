import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top section: Newsletter and Contact */}
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-currency">
          <div>
            <h4>CONTACT US</h4>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h4>CURRENCY</h4>
            <p><span role="img" aria-label="flag">🇺🇸</span> USD</p>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* Bottom section: Links, Socials & Payments */}
      <div className="footer-bottom">
        <div>
          <h4>mettà muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📷</span>
            <span>💼</span>
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className="payments">
            <img src="/images/gpay.svg" alt="GPay" />
            <img src="/images/mastercard.svg" alt="Mastercard" />
            <img src="/images/paypal.svg" alt="Paypal" />
            <img src="/images/amex.svg" alt="Amex" />
            <img src="/images/applepay.svg" alt="Apple Pay" />
            <img src="/images/shopifypay.svg" alt="Shop Pay" />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
