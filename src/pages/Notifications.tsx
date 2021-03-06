import React from 'react';
import { IonContent, IonHeader, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';
import './Notifications.css';



const Notifications: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonContent>
                    <IonList>
                        <IonListHeader>
                            Notifications
                          </IonListHeader>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Enable Notifications
                            </IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Icon Badge Notification
                            </IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonToggle slot="end" color="success" />
                            <IonLabel>
                                Enable Push Notifications
                            </IonLabel>
                        </IonItem>


                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Notifications;
