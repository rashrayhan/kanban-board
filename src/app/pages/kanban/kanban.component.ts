import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent {
  columnData: string;
  newBoardTitle: string;
  newBoardColumn: string;

  constructor() {  }
  boardTitles = ['todo', 'done', 'third', 'fourth'];


  boardColumns = {
    todo: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],
    done : [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
    third: [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ],
    fourth : [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ],
  };


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addItem(board){
    this.columnData = prompt('enter new item');
    board.push(this.columnData);
  }

  removeColumn(board, data){
    board.pop(board.filter(elem => elem != data));
  }

  addBoard(){
    this.newBoardTitle = prompt('Enter board title');
    this.newBoardColumn = prompt('Enter board column');

    if(this.newBoardTitle && this.newBoardColumn != ''){
      this.boardTitles.push(this.newBoardTitle);
      this.boardColumns = {...this.boardColumns, [this.newBoardTitle] : [this.newBoardColumn]};
    }else{
      alert('empty fields not allowed');
    }

  }
  removeBoard(title){
    confirm('are you sure you want to delete board?') ? this.boardTitles = this.boardTitles.filter(elem => elem != title) : 'cancel';

  }


}
