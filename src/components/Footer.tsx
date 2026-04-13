import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  SmartPhone01Icon,
  Location01Icon,
  GlobalIcon,
  Linkedin01Icon,
  InstagramIcon,
  Facebook01Icon,
  YoutubeIcon,
  ArrowDown01Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-slate-600 py-12 px-6 md:px-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="text-2xl font-bold text-[#1a2b4b]">azimute</span>
          </div>
          <p className="text-slate-400 text-sm italic font-light">
            Transformação digital que realmente funciona.
          </p>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Columns 1 & 2 */}
          <div>
            <h3 className="font-bold text-[#1a2b4b] mb-5 text-sm uppercase tracking-wider">
              Empresa
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Testemunhos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#1a2b4b] mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Benefícios principais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Os nossos serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Porquê salesforce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Testemunhos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact with HugeiconsIcon wrapper */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#1a2b4b] mb-5 text-sm uppercase tracking-wider">
              Contacto
            </h3>

            <div className="flex items-center gap-3 group">
              <div className="p-2 border border-blue-50 rounded-lg group-hover:bg-blue-50 transition-all">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={20}
                  variant="stroke"
                  className="text-blue-500"
                />
              </div>
              <span className="text-sm">info@azimute.pt</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-2 border border-blue-50 rounded-lg group-hover:bg-blue-50 transition-all">
                <HugeiconsIcon
                  icon={SmartPhone01Icon}
                  size={20}
                  variant="stroke"
                  className="text-blue-500"
                />
              </div>
              <span className="text-sm">+351 123 456 789</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="p-2 border border-blue-50 rounded-lg group-hover:bg-blue-50 transition-all">
                <HugeiconsIcon
                  icon={Location01Icon}
                  size={20}
                  variant="stroke"
                  className="text-blue-500"
                />
              </div>
              <span className="text-sm">Lisboa, Portugal</span>
            </div>
          </div>

          {/* Column 4: Language & Socials */}
          <div className="flex flex-col items-start md:items-end gap-8">
            <button className="flex items-center gap-2 px-5 py-2 border border-slate-200 rounded-full text-sm hover:bg-slate-50 transition-all font-medium">
              <HugeiconsIcon icon={GlobalIcon} size={18} variant="stroke" />
              Português
              <HugeiconsIcon
                icon={ArrowDown01Icon}
                size={14}
                variant="stroke"
                className="ml-1 opacity-50"
              />
            </button>

            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <HugeiconsIcon
                  icon={Linkedin01Icon}
                  size={22}
                  variant="stroke"
                />
              </a>
              <a
                href="#"
                className="p-2.5 border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <HugeiconsIcon
                  icon={InstagramIcon}
                  size={22}
                  variant="stroke"
                />
              </a>
              <a
                href="#"
                className="p-2.5 border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <HugeiconsIcon
                  icon={Facebook01Icon}
                  size={22}
                  variant="stroke"
                />
              </a>
              <a
                href="#"
                className="p-2.5 border border-slate-100 rounded-xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <HugeiconsIcon icon={YoutubeIcon} size={22} variant="stroke" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium">
          <p>© {currentYear} Azimute. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-slate-600 uppercase tracking-widest"
            >
              Termos e Condições
            </a>
            <a
              href="#"
              className="hover:text-slate-600 uppercase tracking-widest"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="hover:text-slate-600 uppercase tracking-widest"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
