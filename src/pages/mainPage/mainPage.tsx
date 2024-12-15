import React from 'react';
import Header from "@/widgets/Header/Header";
import classes from './mainPage.module.scss'
import face from '@/assets/face.gif';
import WorkStages from "@/components/workStages/workStages";
import Morf from "@/assets/morf.png"
import Footer from "@/widgets/footer/Footer";
import Slider from "@/components/Swiper/Swiper";




function MainPage() {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.headerText}>
                ты интернет, я интернет, мы интернет
            </div>
            <Header/>
            <main className={classes.main}>
                <div id="main" className={classes.images}>
                    <div className={classes.questionsContainer}>
                        <div className={classes.questions}>
                            <div className={classes.HeadText}>
                                Вы приходите с вопросами:
                            </div>
                            <div className={classes.descriptionText}>
                                <p className={classes.greenColor}>·</p> Какие услуги вы предоставляете после завершения
                                проекта?
                            </div>
                        </div>
                        <div className={classes.faceImage}>
                            <img src={face} alt='Face' width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
                <div className={classes.HeadText}>И получаете ответы...</div>
                <WorkStages/>
                <div className={classes.morfPic}>
                    <img src={Morf} alt='Morf' width="100%" height="100%"/>
                </div>

                <Slider/>

                <div id="message" className={classes.contactContainer}>
                    <div style={{
                        textShadow: '0 0 23px #00FF00',
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',

                    }} className={classes.HeadText}>НАПИСАТЬ НАМ
                    </div>
                    <div className={classes.contactUs}>
                        <div  className={`${classes.descriptionText} + ${classes.contactText}`}>Погрузись в матрицу - ты
                            интернет,
                            я интернет, мы интернет. Забудь про web 1.0 и 2.0, мы интернет будущего!
                        </div>
                        <div style={{color: 'white'}} className={classes.descriptionText}>Ваше имя</div>
                        <input className={classes.inputs}></input>
                        <div style={{color: 'white'}} className={classes.descriptionText}>Ваш телефон</div>
                        <input className={classes.inputs}></input>
                        <div style={{color: 'white'}} className={classes.descriptionText}>Ваш вопрос</div>
                        <input className={`${classes.inputs} ${classes.questInpt}`}/>

                    </div>
                </div>
                <div className={classes.sendBtn}>ОТПРАВИТЬ</div>

            </main>
            <Footer/>
        </div>
    );
}

export default MainPage;
