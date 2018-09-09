import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'dragDropApp';
    age = 12;

    persons: Person[] = [
        {
            id: 1,
            name: 'cola',
            order: 1
        },
        {
            id: 2,
            name: 'fanta',
            order: 2
        },
        {
            id: 3,
            name: 'pepsi',
            order: 3
        },
        {
            id: 4,
            name: 'sprite',
            order: 4
        },
        {
            id: 5,
            name: 'pepper',
            order: 5
        }
    ];

    ngOnInit() {
        this.sortPersons();
    }

    private getPersonById(id: number): { person: Person, index: number } {
        for (let i = 0; i < this.persons.length; ++i) {
            if (this.persons[i].id === id) {
                return {
                    person: this.persons[i],
                    index: i
                };
            }
        }
    }

    dropped(data) {
        const drag = this.getPersonById(data.drag.id);
        const drop = this.getPersonById(data.drop.id);

        if (drag.person.order !== drop.person.order) {
            const orderToSet = drop.person.order;

            if (drag.index > drop.index) { // move up
                for (let i = drop.index; i < this.persons.length; ++i) {
                    this.persons[i].order++;
                }
            } else { // move down
                for (let i = drop.index; i > -1; --i) {
                    this.persons[i].order--;
                }
            }

            drag.person.order = orderToSet;

            this.sortPersons();

            for (let i = 0; i < this.persons.length; ++i) {
                this.persons[i].order = i + 1;
            }
        }
    }

    droppedFlowers(data) {
        console.log('droppedFlowers');
        // const drag = this.getPersonById(data.drag.id);
        // const drop = this.getPersonById(data.drop.id);

        // if (drag.person.order !== drop.person.order) {
        //     const orderToSet = drop.person.order;

        //     if (drag.index > drop.index) { // move up
        //         for (let i = drop.index; i < this.persons.length; ++i) {
        //             this.persons[i].order++;
        //         }
        //     } else { // move down
        //         for (let i = drop.index; i > -1; --i) {
        //             this.persons[i].order--;
        //         }
        //     }

        //     drag.person.order = orderToSet;

        //     this.sortPersons();

        //     for (let i = 0; i < this.persons.length; ++i) {
        //         this.persons[i].order = i + 1;
        //     }
        // }
    }


    private sortPersons() {
        this.persons.sort((a: Person, b: Person) => {
            return a.order - b.order;
        });
    }
}
