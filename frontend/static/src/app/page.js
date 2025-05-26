'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from "./styles/main-tablet.module.css";
import backgroundImage from "./assets/main-image.png";
import { Oswald, Rubik, Raleway } from 'next/font/google';
import picture1 from "./assets/picture1.png";
import decoration from "./assets/slides-decor.png";
import picture2 from "./assets/picture2.png";
import picture3 from "./assets/picture3.png";
import picture4 from "./assets/picture4.png";
import picture5 from "./assets/picture5.png";
import cardpicture1 from "./assets/request1.png";
import cardpicture2 from "./assets/request2.png";
import cardpicture3 from "./assets/request3.png";
import cardpicture4 from "./assets/request4.png";
import arrow from "./assets/arrow.svg";
import toggleTips from "./assets/toggleTip.png";
import Services from './components/services';
import Form from './components/form';
import footer from './assets/footer.jpg'

const oswald = Oswald ({
   subsets: ['latin', 'cyrillic'],
   weight: ['300', '400', '600'],
});

const rubik = Rubik ({
  subsets: ['latin', 'cyrillic'],
   weight: ['300', '400', '500'],
});

const raleway = Raleway ({
  subsets: ['latin', 'cyrillic'],
   weight: ['200', '300', '400', '500', '600'],
});

const slides = [
  {
    class: `${styles.pictures}`,
    img: picture1,
    description: 'Если Вы чувствуете',
    listItems: [
      'Постоянную усталость',
      'Раздражительность',
      'Потерю интереса к работе'
    ],
    conclusion: 'Я смогу помочь Вам разобраться в причинах этого состояния и найти путь к восстановлению энергии и интереса к своей деятельности.'
  },
  {
    class: `${styles.decorations}`,
    img: decoration,
    description: 'Если Вы испытываете',
    listItems: [
      'Трудности в общении с коллегами',
      'Конфликты на рабочем месте',
      'Желание избежать командных проектов'
    ],
    conclusion: 'Я смогу помочь Вам наладить межличностные отношения, что повысит продуктивность и комфорт на работе.'
  },
  {
    class: `${styles.pictures}`,
    img: picture2,
    description: 'Если Вы сталкиваетесь с',
    listItems: [
      'Постоянным чувством тревоги',
      'Страхом перед ошибками',
      'Неуверенностью в своих способностях'
    ],
    conclusion: 'Я смогу помочь Вам снизить уровень стресса и повысить самооценку, чтобы вы были уверены и успешны.'
  },
  {
    class: `${styles.pictures}`,
    img: picture3,
    description: 'Если Вы ощущаете',
    listItems: [
      'Потребность в постоянной поддержке',
      'Неспособность справляться с задачами самостоятельно',
      'Страх перед новыми вызовами'
    ],
    conclusion: 'Я смогу помочь Вам развить уверенность в себе и справляться с вызовами.'
  },
  {
    class: `${styles.decorations}`,
    img: decoration,
    description: 'Если Вы переживаете',
    listItems: [
      'Эмоциональную опустошенность',
      'Ощущение, что не получаете удовольствия от работы',
      'Чувство безысходности'
    ],
    conclusion: 'Я смогу помочь Вам выявить источники неудовлетворенности и вернуть радость от профессии.'
  },
  {
    class: `${styles.pictures}`,
    img: picture4,
    description: 'Если Вы испытываете',
    listItems: [
      'Резкие перепады настроения',
      'Сложности в управлении эмоциями',
      'Недовольство своим состоянием'
    ],
    conclusion: 'Я смогу предложить техники по управлению эмоциями и помочь наладить внутренний баланс для комфорта в рабочей среде.'
  },
  {
    class: `${styles.decorations}`,
    img: decoration,
    description: 'Если Вы замечаете',
    listItems: [
      'Ощущение, что трудности растут, а решения становятся все менее очевидными',
      'Постоянное ощущение стресса',
      'Сложности с планированием и организацией работы'
    ],
    conclusion: 'Я смогу помочь Вам разобраться с вашими задачами и найти эффективные стратегии тайм менеджмента.'
  },
  {
    class: `${styles.pictures}`,
    img: picture5,
    description: 'Если Вы чувствуете',
    listItems: [
      'Отсутствие мотивации',
      'Трагическое восприятие своих усилий',
      'Смену приоритетов, которые не соответствуют вашим целям'
    ],
    conclusion: 'Я смогу помочь Вам переосмыслить ваши ценности и рабочие приоритеты и восстановить мотивацию.'
  }
];

const slidesTwo = [
  {
    class: `${styles.pictures}`,
    img: picture1,
    description: 'Если Вы испытываете ',
    listItems: [
    'Неспокойствие по поводу изменений в организации',
    'Трудности с адаптацией к нововведениям',
    'Страх перед будущим вашей компании'
    ],
    conclusion: 'Я смогу помочь Вам понять и адаптироваться к изменениям.'
  },
  {
    class: `${styles.decorations}`,
    img: decoration,
    description: 'Если Вы замечаете ',
    listItems: [
    'Высокую текучесть кадров в вашей команде',
    'Недовольство сотрудников',
    'Плохую атмосферу в коллективе'
    ],
    conclusion: 'Я смогу предложить решения по повышению мотивации и вовлеченности ваших сотрудников.'
 },
  {
    class: `${styles.pictures}`,
    img: picture2,
    description: 'Если Вы хотите ',
    listItems: [
    'Улучшить уровень удовлетворенности сотрудников',
    'Повысить эффективность командной работы',
    'Укрепить корпоративную культуру'
    ],
    conclusion: 'Я смогу помочь Вам внедрить успешные практики, способствующие развитию команды и улучшению рабочей среды.'
},
  {
    class: `${styles.decorations}`,
    img: decoration,
    description: 'Если Вы чувствуете ',
    listItems: [
    'Необходимость в обучении управленческим навыкам',
    'Желание развивать лидерские качества',
    'Стремление стать эффективным руководителем'
    ],
    conclusion: 'Я смогу предложить тренинги, разработанные для улучшения ваших управленческих навыков.'
},

];

const cards = [
{
  class: `${styles.card}`,
  img: cardpicture1,
  capture: 'Получение заявки на консультацию',
},
{
  class: `${styles.card}`,
  img: cardpicture2,
  capture: 'Принятие вашей заявки',
},
{
  class: `${styles.card}`,
  img: cardpicture3,
  capture: 'Общение для уточнения деталей',
},
{
  class: `${styles.card}`,
  img: cardpicture4,
  capture: 'Начало работы с вами',
},

]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
  const [isChecked, setIsChecked] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('isChecked');
    if (storedValue !== null) {
      setIsChecked(JSON.parse(storedValue)); // Парсим значение из localStorage
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNextTwo = () => {
    setCurrentIndexTwo((prev) => (prev === slidesTwo.length - 3 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextTwo, 4000);
    return () => clearInterval(interval);
  }, []);

 useEffect(() => {
    localStorage.setItem('isChecked', JSON.stringify(isChecked)); // Сохраняем значение в localStorage
  }, [isChecked]);

  const handleToggle = () => {
    setIsChecked(prevChecked => !prevChecked); // Изменяем состояние переключателя
  };
  return (
    <>
    <div className={styles.homepage}>
      <div className={styles.mainContainer}>
        <Image
          src={backgroundImage}
          alt="Фоновое изображение"
          quality={100}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
        />
        <div className={`${oswald.className} ${styles.content}`}>
          <h1 className={styles.title}>
            Работа без стресса жизнь без тревог
          </h1>
          <p className={`${raleway.className} ${styles.description}`}>
            Психологическая помощь для Вас и Вашей компании, помогаю решать личные и профессиональные проблемы, повышать эффективность работы
          </p>
          <div className={styles.buttons}>
            <a href='#form' className={`${raleway.className} ${styles.primaryButton}`}>Записаться на консультацию</a>
            <a href='#services' className={`${raleway.className} ${styles.secondaryButton}`}>Посмотреть услуги</a>
          </div>
          <div className={styles.toggleInfo}>
            <Image src={toggleTips} alt=''/>
            <p className={raleway.className}>Для продолжения выберите тип лица: физическое или юридическое. Это поможет нам адаптировать сервис под ваши нужды.</p>
          </div>
          <div className={styles.toggle}>
            <h3 className={raleway.className} style={{ color: !isChecked ? 'rgba(139, 84, 247, 1)' : 'black' }}>Юридическое лицо</h3>
            <label className={styles.toggleSwitch}>
              <input type="checkbox" checked={isChecked} onChange={handleToggle} />
              <span className={styles.slider}></span>
            </label>
            <h3  className={raleway.className} style={{ color: isChecked ? 'rgba(139, 84, 247, 1)' : 'black' }}>Физическое лицо</h3>
          </div>
        </div>
      </div>
        <div className={styles.infoBlocks}>
          <h2 className={`${rubik.className} ${styles.subtitle}`}>Зачем нужен корпоративный психолог?</h2>
          <div className={styles.slides}>
            <div className={styles.carouselContainer}>
              {isChecked ? (
                <div className={`${raleway.className} ${styles.carouselTrack}`} style={{ transform: `translateX(-${(currentIndex) * (268 / slides.length)}%)` }}>
                  {slides.map((slide, index) => (
                    <div key={index} className={styles.carouselItem}>
                      <Image className={slide.class} src={slide.img} alt='' />
                      <h3>{slide.description}</h3>
                      <ul className={styles.slidesList}>
                        {slide.listItems.map((item, idx) => (
                          <li key={`${index}-${idx}`} className={styles.listItem}>{item}</li>
                        ))}
                      </ul>
                      <p>{slide.conclusion}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.carouselTrack} style={{ transform: `translateX(-${(currentIndexTwo) * (134.5 / (slidesTwo.length))}%)` }}>
                  {slidesTwo.map((slide, twoIndex) => (
                    <div key={twoIndex} className={styles.carouselItem}>
                      <Image className={slide.class} src={slide.img} alt='' />
                      <h3>{slide.description}</h3>
                      <ul className={styles.slidesList}>
                        {slide.listItems.map((item, idx2) => (
                          <li key={`${twoIndex}-${idx2}`} className={styles.listItem}>{item}</li>
                        ))}
                      </ul>
                      <p>{slide.conclusion}</p>
                    </div>
                  ))}
                  </div>
                
              )};
              
            </div>
          </div>
        </div>
            <div className={styles.infoBlocks}>
              <h2 className={`${rubik.className} ${styles.subtitle}`}>Как происходит обработка запроса?</h2>
              <div className={styles.requests}>
                {cards.map((card, cardIndex) => (
                  <React.Fragment key={cardIndex}>
                    <div className={card.class}>
                      <Image src={card.img} alt={``} />
                      <p className={styles.cardCapture}>{card.capture}</p>
                    </div>
                    {cardIndex < cards.length - 1 && (
                      <Image className={styles.arrow} src={arrow} alt='' />
                    )}
                  </React.Fragment>
                ))}
              </div>
          </div>

        <div id="services" className={styles.infoBlocks}>
          <h2 className={`${rubik.className} ${styles.subtitle}`}>Услуги</h2>
          <div className={styles.serviceBlock}>
              {isChecked ? ( <div className={styles.services}>
                      <Services title="Консультирование" time="1 - 1,5 часа" cost="от 4 000 до 5 000" description="Встреча, на которой обсуждается и анализируется запрос клиента и вырабатываются шаги по изменению ситуации и достижению требуемых результатов. Проводится в формате онлайн в любом удобном для клиента приложении." moreinfo=""/>
                      <Services title="Срочное консультирование" time="1 - 1,5 часа" cost="+ 5 000 рублей к стоимости услуги" description="Консультация в течение 2 ближайших дней при отсутствии свободных слотов." moreinfo=""/>
                      <Services title="Супер срочное консультирование" time="1 - 1,5 часа" cost="+ 20 000 рублей к стоимости услуги" description="Консультация в текущий день, при поступлении заявки до 20:00 по московскому времени, либо утром следующего дня." moreinfo=""/>
                      <Services title="Работа с негативным состоянием" time="4 часовых сеанса (1 месяц)" cost="20 000 рублей" description="Выявляем причины возникновения негативного состояния путем интервью, проведения специальных тестов и фиксации своего состояния в течение недели, анализируем полученные результат, вырабатываем эффективную стратегию улучшения состояния и недопущения повторения текущей ситуации в дальнейшем. Улучшения обычно наступают после первого сеанса, но для того, чтобы всё не вернулось нужно разобраться со всеми причинами." moreinfo=""/>
                      <Services title="Диагностика" time="8 часовых сеансов (1 - 2 месяца)" cost="40 000 рублей" description="Услуга включает в себя интервью, 7 методик на выбор специалиста, анализ полученных результатов, их обсуждение с клиентом и предоставление рекомендаций. В рамках данной услуги анализируется личность клиента не только в профессиональном плане. Подходит тем, кто хочет глубже узнать себя." moreinfo=""/>
                      <Services title="Составление резюме" time="5 рабочих дней + 2 встречи" cost="от 20 000 рублей" description="Услуга включает в себя анализ вакансий по данной профессии и анализ резюме представленных на HH.ru и составление для кандидата качественного резюме привлекательного для потенциальных работодателей. Возможно изготовление нескольких вариантов резюме индивидуально под наиболее интересные вакансии. Также клиенту будут даны рекомендации по отклику на вакансии и прохождению собеседования. Клиент должен сам сделать и предоставить фото в соответсвии с рекомендациями. Рекомендуется сразу после записи на услугу направить информацию об интересующей профессии с указанием города." moreinfo=""/>
              </div>
              ) : (
                <div className={styles.services}>
                  <Services title="Вводное знакомство" time="около 1 часа" cost="бесплатно" description="Встреча для знакомства, обсуждения интересующих услуг и процесса работы." moreinfo=""/>
                  <Services title="Консультирование" time="1 час" cost="4 000 в час, при покупке более 40 часов скидки" description="Консультации организационного психолога для сотрудников вашей компании по разрешению рабочих ситуаций, состоянию, мотивации, планам роста и другим." moreinfo=""/>
                  <Services title="Комплексная диагностика компании" time="1 месяц" cost="от 100 000 для малого бизнеса" description="Одна или несколько вводных встреч с руководством или собственником для составления списка проблем. Составления детального плана по диагностике организации и его реализация. Анализ полученных результатов, составления отчета и презентации по выявленным проблемам и их причинам и включающий рекомендации по изменению ситуации. Руководитель организации должен обеспечить участие персонала в проведении диагностики." moreinfo=""/>
                  <Services title="Анализ состояния сотрудников" time="2 - 3 недели" cost="от 40 000 для компаний с количеством сотрудников менее 20" description="Встреча с руководством для конкретизации запроса и установления списка причин, которые могут влиять на состояние сотрудников. Выбор методик и разработка детального плана диагностики. Проведение диагностики, анализ полученных результатов и их презентация, включающая список рекомендаций. При наличии в компании HR специалиста рекомендуется его привлечение в процессе оказания услуги." moreinfo=""/>
                  <Services title="Разработка стиля компании её миссии и ценностей" time="2 недели (не менее 4 встреч с руководством)" cost="от 50 000 рублей" description="Как говорится, как корабль назовёшь, так он и поплывет. Данная услуга помогает разобраться, что является важным и приоритетным именно для вашего бизнеса, для чего он был создан и какой смысл несёт. На проверку, обычно всё оказывается не так просто, как кажется на первый взгляд. В рамках услуги выявляются именно истинные цели и мотивы. В услугу также входят рекомендации по донесению полученной информации до персонала." moreinfo=""/>
                  <Services title="Разработка стратегии компании для привлечения клиентов и сотрудников" time="от 2 недель (включая не менее 2 встреч)" cost="от 50 000 рублей" description="Услуга чем-то похожа на маркетинговое продвижение, но предполагает в первую очередь психологический подход к анализу целевой аудитории, имиджа, который компаний хочет иметь в её глазах, и ассоции, которые хочет вызывать. По результатам работы предоставляется отчет с рекомендациями и проводится презентация." moreinfo=""/>
                </div>
              )
              }
                    </div>

                    <div className={styles.showButton}><a href="/services" className={styles.showAll}>Показать все</a></div>
          
        </div>
        <Form isChecked={isChecked} />
        <div className={styles.footer}>
          <Image src={footer} alt=''/>
        </div>
      </div>     
    </>
  );
}
