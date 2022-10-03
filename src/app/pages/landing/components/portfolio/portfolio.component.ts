import { Component, OnInit } from '@angular/core';
import { LOREM } from 'src/app/core/constants/personal-info.constant';
import {
  PortfolioCategory,
  PortfolioItem,
} from '../../models/portfolio.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  selectedCategory?: PortfolioCategory;

  description: string = LOREM;
  categories: Array<PortfolioCategory> = [
    {
      label: 'All',
      name: 'all',
      active: true,
    },
    {
      label: 'Web App',
      name: 'web-app',
    },
    {
      label: 'Mobile app',
      name: 'mobile-app',
    },
    {
      label: 'Frontend',
      name: 'frontend',
    },
    {
      label: 'Backend',
      name: 'backend',
    },
  ];

  projects: Array<PortfolioItem> = [
    {
      title: 'Project Heading',
      description: LOREM,
      imgSrc: './../../../../../assets/images/project-1.jpg',
      codeLanguages: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'angular',
          color: '#CA3327',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'react',
          color: '#62D4FA',
        },
      ],
      tags: ['backend', 'frontend'],
    },
    {
      title: 'Project Heading',
      description: LOREM,
      imgSrc: './../../../../../assets/images/project-1.jpg',
      codeLanguages: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'angular',
          color: '#CA3327',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'react',
          color: '#62D4FA',
        },
      ],
      tags: ['backend', 'frontend'],
    },
    {
      title: 'Project Heading',
      description: LOREM,
      imgSrc: './../../../../../assets/images/project-1.jpg',
      codeLanguages: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'angular',
          color: '#CA3327',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'react',
          color: '#62D4FA',
        },
      ],
      tags: ['backend', 'frontend'],
    },
    {
      title: 'Project Heading',
      description: LOREM,
      imgSrc: './../../../../../assets/images/project-1.jpg',
      codeLanguages: [
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'angular',
          color: '#CA3327',
        },
        {
          type: 'font-awesome',
          prefix: 'fab',
          name: 'react',
          color: '#62D4FA',
        },
      ],
      tags: ['backend', 'frontend'],
    },
  ];

  constructor() {
    this.selectedCategory = this.categories.find((category) => category.active);
  }

  ngOnInit(): void {}

  onCategoryClick(category: PortfolioCategory) {
    if (this.selectedCategory) this.selectedCategory.active = false;
    category.active = true;

    this.selectedCategory = category;
  }
}
