/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e2456320cfc6233ae9336d8
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { FilmService } from '../../services/film.service';
import { FilmMakerService } from '../../services/film-maker.service';
import { ActorService } from '../../services/actor.service';

// Import Models
import { Film } from '../../domain/manage_film_example_db/film';
import { Actor } from '../../domain/manage_film_example_db/actor';import { FilmMaker } from '../../domain/manage_film_example_db/film-maker';
// START - USED SERVICES
/*
 *	FilmService.create
 *		PARAMS: 
 *		
 *
 *	FilmService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	FilmMakerService.list
 *		PARAMS: 
 *		
 *
 *	ActorService.list
 *		PARAMS: 
 *		
 *
 *	FilmService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ActorService  
 * FilmService  
 * FilmMakerService  
 */
// END - REQUIRED RESOURCES

/**
 * Edit component for FilmEdit
 */
@Component({
    selector: 'film-edit',
    templateUrl : './film-edit.component.html',
    styleUrls: ['./film-edit.component.css']
})
export class FilmEditComponent implements OnInit {

    item: Film;
    listCast: Actor[];
    listFilmMaker: FilmMaker[];
    model: Film;
    
    constructor(
        private filmService: FilmService,
        private filmmakerService: FilmMakerService,
        private actorService: ActorService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init item
        this.item = new Film();
    }

    ngOnInit(): void {
            this.route.params.subscribe(param => {
                let id: string = param['id'];
                if (id !== 'new') {
                    // Get item from server 
                    this.filmService.get(id).subscribe(item => this.item = item);
                    
                    
                }
                this.actorService.list().subscribe(list => this.listCast = list);
                this.filmmakerService.list().subscribe(list => this.listFilmMaker = list);
            });
    }

    /**
     * Save Item
     */
    save (formValid:boolean, item: Film): void{
        if (formValid) {
            if(item._id){
                this.filmService.update(item).subscribe(data => this.goBack());
            } else {
                this.filmService.create(item).subscribe(data => this.goBack());
            }  
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }
    
    /**
     * Actor Relations utils functions
     */
    containActor(id: string){
        if(!this.item.cast) return false;
        return this.item.cast.indexOf(id) != -1;
    }
    
    addActor(id: string) {
        if(!this.item.cast)
            this.item.cast = [];
        this.item.cast.push(id);
    }
    
    removeActor(index: number) {
        this.item.cast.splice(index,1);
    }

}