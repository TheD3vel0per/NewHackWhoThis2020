import React from 'react';
import { IonContent, IonHeader,IonInput,IonTextarea, IonToggle, IonList, IonListHeader, IonPage, IonChip, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol,
     IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import UserCard from '../components/UserCard';
import * as firebase from 'firebase';
import UserService from '../services/UserService';
import { User } from '../interfaces/User';
import { Subscription } from 'rxjs';

interface EditProfilePageState {
    user: User
}

class EditProfilePage extends React.Component<any, EditProfilePageState> {

    subscription: Subscription = new Subscription();

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const myUserService: UserService = window['myUserService'];
        console.log(myUserService);
        this.subscription = myUserService.userDoc$.subscribe((user: User) => {
            
            if (user) {
                this.setState({ user : user });
            } else {
                this.setState({
                    user: null, 
                });
            }
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }
    
    handleChange(event: any) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        console.log(value);
        //this.state.user.name = name;

    }

    handleSave(event: any) {
        // write to firebase
    }


    render() {

        console.log(this.state.user);
        return (
            <>
                <IonPage>
                    <IonContent>
                        <IonList>
    
                            {/* <IonListHeader>
                                <IonLabel>Edit Personal Information</IonLabel>
                            </IonListHeader>
    
                            <IonItem button onClick={this.updateName} >
                                <IonLabel >Name</IonLabel>
                                <IonLabel slot="end">this.displayName</IonLabel>
    
                            </IonItem >
                            <IonItem button onClick={()=>this.updateDOB()}>
                                <IonLabel>Date of Birth</IonLabel>
                                <IonLabel slot="end">this.dateOfBirt</IonLabel>
    
                            </IonItem>
                            <IonItem button onClick={() => { }}>
                                <IonLabel>Features</IonLabel>
                                <IonLabel slot="end">this.features</IonLabel>
    
                            </IonItem>
                            <IonItem button onClick={() => { }}>
                                <IonLabel>Gender</IonLabel>
                                <IonLabel slot="end">this.Gender</IonLabel>
    
                            </IonItem> */}
                            {this.state.user?
                                <form>
                                    <IonItem>
                                        <IonLabel>Name</IonLabel>
                                        <IonInput value={this.state.user.name} type="text" name="displayName" onChange={this.handleChange}></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Description</IonLabel>
                                        <IonLabel slot="end"> {this.state.user.description} </IonLabel>
                                        <IonTextarea name="description" onChange={this.handleChange}></IonTextarea>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel>Description</IonLabel>
                                        <IonLabel slot="end"> {this.state.user.description} </IonLabel>
                                        <IonTextarea name="description" onChange={this.handleChange}></IonTextarea>
                                    </IonItem>
                                    <IonButton type="submit" onClick={this.handleSave}>Save</IonButton>
                                </form>
                            :
                                <div><h1>pls log in :D</h1></div>
                            }   
                        </IonList>
                    </IonContent>
                </IonPage>
            </>
        );
    }
}


export default EditProfilePage;