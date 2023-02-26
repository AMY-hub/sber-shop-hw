import { ReactComponent as Telegram } from "./icons/telegram.svg";
import { ReactComponent as Insta } from "./icons/instagram.svg";
import { ReactComponent as Viber } from "./icons/viber.svg";
import { ReactComponent as WhatsApp } from "./icons/whatsapp.svg";
import { ReactComponent as Vk } from "./icons/vk.svg";

import s from './index.module.scss';

export const Socials: React.FC = () => {
  return (
      <ul className={s.socials}>
          <li className={s.socials__item}>
              <a className={s.socials__link} href="#">
                <Telegram />
              </a>
          </li>

          <li className={s.socials__item}>
              <a className={s.socials__link} href="#">
                  <WhatsApp />
              </a>
          </li>
          <li className={s.socials__item}>
              <a className={s.socials__link} href="#">
                <Viber />
              </a>
          </li>
          <li className={s.socials__item}>
              <a className={s.socials__link} href="#">
                <Insta />
              </a>
          </li>
          <li className={s.socials__item}>
              <a className={s.socials__link} href="#">
                <Vk />
              </a>
          </li>
      </ul>
  );
};
