import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-menu',
  templateUrl: './accordion-menu.component.html',
  styleUrls: ['./accordion-menu.component.scss']
})
export class AccordionMenuComponent implements OnInit {
  lessons: Array<any> = [
    {
      title: 'Природа электричества',
      progress : {
        theory : {
          done : 12,
          total : 34
        },
        practice : {
          done : 0,
          total : 34,
        },
      },
      subtopics : [
        {
          title : 'Области электроники',
          path : '',
        },
        {
          title : 'Понятие электрона',
          path : '',
        },
        {
          title : 'Проводники и диэлектрики',
          path : '',
        },
        {
          title : 'Сопротивление электрическому току',
          path : '',
        },
      ]
    },
    {
      title: 'Электрическое поле',
      progress : {
        theory : {
          done : 12,
          total : 32,
        },
        practice : {
          done : 0,
          total : 15,
        },
      },
      subtopics : [
        {
          title : 'Понятие об электрическом поле',
          path : '',
        },
        {
          title : 'Потенциал электрического поля',
          path : '',
        },
        {
          title : 'Напряженность электрического поля',
          path : '',
        },
        {
          title : 'Взаимодействие электрических зарядов',
          path : '',
        },
        {
          title : 'Закон кулона',
          path : '',
        },
      ]
    },

  ];

  constructor() {}

  ngOnInit() { 
  }

}
