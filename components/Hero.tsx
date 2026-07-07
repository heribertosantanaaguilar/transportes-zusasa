.premiumNavbar {
  backdrop-filter: blur(18px);
}

.premiumButton {
  background: var(--orange);
}

.heroV2 {
  background:
    linear-gradient(90deg, rgba(10,29,54,.94), rgba(10,29,54,.72), rgba(10,29,54,.35)),
    url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85");
  background-size: cover;
  background-position: center;
}

.heroV2 h1 {
  text-shadow: 0 8px 30px rgba(0,0,0,.35);
}

.heroV2 .secondary {
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(10px);
}

.primary,
.secondary,
.navWhatsapp,
.floatingWhatsApp {
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}

.primary:hover,
.secondary:hover,
.navWhatsapp:hover,
.floatingWhatsApp:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 34px rgba(0,0,0,.22);
}
