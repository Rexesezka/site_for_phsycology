import React, { useState, useEffect } from 'react';
import MyCalendar from './calendar';
import styles from '../styles/form.module.css'
import { Raleway } from 'next/font/google';

const raleway = Raleway ({
  subsets: ['latin', 'cyrillic'],
   weight: ['200', '300', '400', '500', '600']
});

const Form = ({isChecked}) => {
   const [name, setName] = useState('');
    const [representative, setRepresentative] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [inn, setInn] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [companyName, setCompanyName] = useState('');
    const [post, setPost] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            companyName,
            representative,
            phone,
            email,
            inn,
            serviceType,
            date: selectedDate,
            name,
            post
        };
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submit-form/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Форма успешно отправлена!');
            } else {
                alert('Ошибка при отправке формы.');
            }
        } catch (error) {
            alert('Ошибка сети.');
        }
    };

    useEffect(() => {
        if (isChecked) {
            setCompanyName('');
            setRepresentative('');
            setInn('');
        } else {
            setName('');
            setPost('');
        }
    }, [isChecked]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };


    return (
        <div className={styles.form}>
            
        <div className={styles.formblock}>
          <h1 className={`${raleway.className} ${styles.title}`}>Форма для записи</h1>
          <div>
            <form onSubmit={handleSubmit}>
                <div className={styles.formstyle}>
                    <div className={styles.labels}>
                    {!isChecked && (
                <>
                        <label className={styles.label}>
                            <input 
                                type="text" 
                                value={companyName} 
                                onChange={(e) => setCompanyName(e.target.value)} 
                                required 
                                placeholder="Название"
                            />
                            
                        </label>
                        <label className={styles.label}>
                            <input 
                                type="text" 
                                value={representative} 
                                onChange={(e) => setRepresentative(e.target.value)} 
                                required 
                                placeholder="Имя представителя"
                            />
                            
                        </label>
                        <label className={styles.label}>
                            <input 
                                type="text" 
                                value={inn} 
                                onChange={(e) => setInn(e.target.value)} 
                                required 
                                placeholder="Ваш ИНН"
                            />
                            
                        </label>
                            </>
                        )}

                    {isChecked && (
                        <>
                            <label className={styles.label}>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    placeholder="Имя"
                                />
                                
                            </label>
                            <label className={styles.label}>
                                <input 
                                    type="text" 
                                    value={post} 
                                    onChange={(e) => setPost(e.target.value)} 
                                    required 
                                    placeholder="Должность"
                                />
                                
                            </label>
                        </>
                    )}

                    <label className={styles.label}>
                        <input 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                            placeholder="+7 (999) 999 99 99"
                        />
                        
                    </label>

                    <label className={styles.label}>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            placeholder="yourmail@mail.ru"
                        />
                        
                    </label>

                    <label className={styles.label}>
                        <textarea className={styles.goal}
                            value={serviceType} 
                            onChange={(e) => setServiceType(e.target.value)} 
                            required
                            placeholder="Укажите вашу цель или услугу"
                        />
                            </label>
                        </div>
                                    
                        <MyCalendar
                                onChange={handleDateChange}
                                value={selectedDate}
                            />
                    </div>
                                
                                <button type="submit" className={styles.send}>Отправить</button>
                            </form>
                        </div>
                        </div>
                    </div>






        
    );
};

export default Form;
