import './App.css';
import img1 from './assets/Img1.jpeg';
import img2 from './assets/Img2.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
<header className="header">
  <div className="logo">Espaço<span>Buddy</span></div>
  <nav>
    <ul>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#advantages">Vantagens</a></li>
      <li><a href="#guide">Guia</a></li>
      <li><a href="#contact">Contato</a></li>
    </ul>
  </nav>
  <a
    href="https://wa.me/5515996319265?text=Gostaria%20de%20saber%20mais%20sobre%20Espa%C3%A7oBuddy"
    target="_blank"
    rel="noopener noreferrer"
    className="header-button"
  >
    Entre em contato
  </a>
</header>


      <section className="hero">
        <div className="hero-text">
          <h1>Alimente seu pet com inteligência —<br />automatize os cuidados com quem você ama</h1>
          <p>
            EspaçoBuddy: O futuro da alimentação pet conectada. Rotinas programáveis, monitoramento remoto e a garantia
            de que seu amigo nunca ficará com fome.
          </p>
          <button>Quero ser avisado sobre novidades</button>
        </div>
        <div className="hero-image">
          <img src={img2} alt="Cachorros com comida" />

        </div>
      </section>

    <section id='about'>
      <div className="sobre">
      <div className="sobre-image">
        <img src={img1} alt="Cachorro com alimentador" />
      </div>
      <div className="sobre-texto">
        <h2>Sobre o EspaçoBuddy</h2>
        <p>
          O EspaçoBuddy revoluciona a forma como você cuida do seu pet. Com design moderno e tecnologia de ponta,
          ele garante que seu melhor amigo receba a nutrição adequada no momento certo, mesmo quando você não está por perto.
          Conectado via Wi-Fi, ele oferece total controle na palma da sua mão.
        </p>
        <ul>
          <li>✅ Conexão Wi-Fi estável para controle remoto</li>
          <li>✅ Programação de rotinas de alimentação flexíveis via app</li>
          <li>✅ Sensores inteligentes para monitorar nível de ração</li>
          <li>✅ Histórico de alimentação e notificações em tempo real</li>
          <li>✅ Compatível com diferentes tipos de ração seca</li>
        </ul>
      </div>
      </div>
    </section>

    <section id='advantages'>
      <div className="vantagens">
      <h2>Vantagens de Usar EspaçoBuddy</h2>
      <div className="vantagens-grid">
        <div className="vantagem-card">
          <span>⏱️</span>
          <h3>Economia de Tempo</h3>
          <p>Automatize as refeições diárias e libere seu tempo para brincar e interagir com seu pet.</p>
        </div>
        <div className="vantagem-card">
          <span>💧</span>
          <h3>Alimentação Precisa</h3>
          <p>Programe porções exatas para manter a dieta do seu pet sob controle, prevenindo excesso ou falta.</p>
        </div>
        <div className="vantagem-card">
          <span>📞</span>
          <h3>Monitoramento Remoto</h3>
          <p>Acompanhe o nível de ração, agendamentos e receba alertas diretamente no seu smartphone.</p>
        </div>
        <div className="vantagem-card">
          <span>❤️</span>
          <h3>Mais Saúde para o Pet</h3>
          <p>Rotinas regulares e porções corretas contribuem para a saúde digestiva e bem-estar geral.</p>
        </div>
        <div className="vantagem-card">
          <span>⚙️</span>
          <h3>Fácil Configuração</h3>
          <p>Configuração rápida e intuitiva através do aplicativo dedicado para iOS e Android.</p>
        </div>
        <div className="vantagem-card">
          <span>🔔</span>
          <h3>Notificações Inteligentes</h3>
          <p>Receba alertas sobre nível baixo de ração, agendamentos cumpridos e status do dispositivo.</p>
        </div>
      </div>
      </div>
    </section>


    <section id='guide'>
      <div className="como-funciona">
      <h2 className="titulo">Como Funciona o EspaçoBuddy</h2>
      <div className="passos">
        <div className="passo">
          <div className="icone"><span>⚙️</span></div>
          <h3>1. Configure no App</h3>
          <p>Baixe nosso app, conecte o EspaçoBuddy ao Wi-Fi e personalize os horários e porções de ração.</p>
        </div>

        <span className="seta">➝</span>

        <div className="passo">
          <div className="icone"><span>💧</span></div>
          <h3>2. Adicione Ração</h3>
          <p>Encha o compartimento de ração seca. Sensores inteligentes monitoram o nível disponível.</p>
        </div>

        <span className="seta">➝</span>

        <div className="passo">
          <div className="icone"><span>✅</span></div>
          <h3>3. O EspaçoBuddy Cuida</h3>
          <p>Relax! O alimentador segue suas rotinas programadas, dispensando a ração nos horários certos.</p>
        </div>
      </div>
      </div>
    </section>

        <section className="depoimentos">
      <h2>O Que Nossos Clientes Dizem</h2>
      <div className="cards-depoimentos">
        <div className="card">
          <p>
            "O EspaçoBuddy mudou a minha vida! Viajo bastante e sempre me preocupava com a alimentação da minha gata. Agora, tenho total paz de espírito sabendo que ela está sendo alimentada corretamente."
          </p>
          <div className="autor">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ana Souza" />
            <strong>Ana Souza</strong>
          </div>
        </div>

        <div className="card">
          <p>
            "Simplesmente incrível. A configuração foi super fácil e o app é muito intuitivo. Meu cachorro adora a rotina e eu adoro a conveniência."
          </p>
          <div className="autor">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Bruno Lima" />
            <strong>Bruno Lima</strong>
          </div>
        </div>

        <div className="card">
          <p>
            "Recomendo a todos os donos de pets! A precisão nas porções ajudou a controlar o peso da minha cadelinha. Investimento que vale a pena!"
          </p>
          <div className="autor">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Carla Martins" />
            <strong>Carla Martins</strong>
          </div>
        </div>
      </div>
    </section>
    
        <section id='contact'>
          <div className="newsletter-section"> 
        <div className="newsletter-container">
        <div className="newsletter-text">
          <h2>Interessado no EspaçoBuddy?</h2>
          <p>
            Deixe seus dados para receber atualizações exclusivas sobre o lançamento, promoções e dicas de cuidado com pets. 
            Garanta o melhor para seu amigo!
          </p>
        </div>
        <form className="newsletter-form">
          <label>
            Nome Completo
            <input type="text" placeholder="Seu nome" required />
          </label>
          <label>
            E-mail
            <input type="email" placeholder="seu.email@exemplo.com" required />
          </label>
          <label>
            Mensagem (Opcional)
            <textarea placeholder="Deixe uma mensagem sobre seu interesse..."></textarea>
          </label>
          <button type="submit">Quero Receber Novidades</button>
        </form>
      </div>
      </div>
    </section>

      <footer className="footer">
      <div className="footer-content">
        <h2>EspaçoBuddy</h2>

        <div className="footer-newsletter">
          <p>Receba Novidades</p>
          <form className="newsletter-form-footer">
            <input type="email" placeholder="Digite seu email..." />
            <button type="submit">Assinar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <button className="lang-btn">English</button>
        </div>

        <div className="footer-copy">© 2023 EspaçoBuddy.</div>

        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </footer>





    </>
  );
}

export default App;
