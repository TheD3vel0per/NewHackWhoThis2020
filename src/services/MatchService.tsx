import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { Match } from '../interfaces/Match';


export class MatchService {

    matches: Array<Match>
    matchRef: firebase.firestore.CollectionReference;
    matchQuery: firebase.firestore.Query;
    Matches$: BehaviorSubject<Array<Match>> = new BehaviorSubject([]);

    init(id: string) {
        if (firebase.auth().currentUser === null) {
            return new Promise((resolve, reject) => reject());
        }

        this.matchRef = firebase
            .firestore()
            .collection('Matches');
        this.matchQuery = this
            .matchRef
            .where('matchedUsers', 'array-contains', id);
        return new Promise((resolve, reject) => {
            this.matchQuery.onSnapshot(data => {
                const matches = [];
                for (let index = 0; index < data.docs.length; index++) {
                    const document = data.docs[index];
                    matches.push(document.data());
                }
                this.matches = matches;
                this.Matches$.next(matches);
                resolve();
            });
        });
    }

    async deleteAll() {
        console.log(this.matches);
        for (let index = 0; index < this.matches.length; index++) {
            const match: Match = this.matches[index];
            console.log(match);
            this.deleteOne(match);
        }
    }

    async deleteOne(match: Match) {
        await firebase
            .firestore()
            .collection('Matches')
            .doc(match._id)
            .delete();
        console.log(`${match._id} deleted`);

    }

}

window['matchService'] = new MatchService();
export const matchService: MatchService = window['matchService'];