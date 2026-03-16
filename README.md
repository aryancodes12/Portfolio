# Aryan Gupta — Portfolio

A modern, futuristic developer portfolio website built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**.

Live at: [github.com/aryancodes12/Portfolio](https://github.com/aryancodes12/Portfolio)

---

## ✨ Features

- **Dark futuristic theme** — deep space palette with neon accents `#7c3aed` · `#3b82f6` · `#22d3ee`
- **Glassmorphism UI** — frosted glass cards with glow effects
- **Particle background** — interactive particle mesh that reacts to mouse movement
- **Circuit board effect** — cursor-following glowing circuit traces reveal as you hover
- **Typed animation** — rotating roles in the hero section
- **Smooth scroll animations** — powered by Framer Motion
- **GitHub Stats** — live integration with `github-readme-stats`
- **Terminal Easter Egg** — press `` ` `` to open an interactive "AryanOS" terminal
- **Fully responsive** — works on all screen sizes

---

## 🧱 Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| tsparticles | Particle background |
| react-simple-typewriter | Typing animation |
| lucide-react | Icons |

---

## 🚀 Running Locally

```bash
# Clone the repo
git clone https://github.com/aryancodes12/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Landing section with typed text
│   ├── About.tsx          # Bio, philosophy, timeline
│   ├── TechStack.tsx      # Skills + Currently Learning
│   ├── Projects.tsx       # GitHub project cards
│   ├── GitHubStats.tsx    # Live GitHub stats dashboard
│   ├── Contact.tsx        # Email / LinkedIn / GitHub links
│   ├── GlassCard.tsx      # Reusable glassmorphism card
│   ├── SectionContainer.tsx # Layout wrapper for sections
│   ├── ParticleBackground.tsx # Interactive particles + circuit effect
│   └── TerminalEasterEgg.tsx  # Hidden terminal (press ` to open)
├── App.tsx
└── index.css
```

---

## 🔧 Adding Projects

Projects are defined in `src/components/Projects.tsx`. To add a new one:

```tsx
{
  title: 'My New Project',
  description: 'What does it do?',
  tech: ['Python', 'React'],
  icon: <Code2 className="text-cyan-400" size={24} />,
  githubUrl: 'https://github.com/aryancodes12/my-new-repo'
}
```

---

## 📬 Contact

- **Email**: aryansynthh@gmail.com
- **GitHub**: [aryancodes12](https://github.com/aryancodes12)
- **LinkedIn**: [Aryan Rajesh Gupta](https://linkedin.com/in/aryan-rajesh-gupta-386449360)

---

*Built with ❤️ by Aryan Gupta*
