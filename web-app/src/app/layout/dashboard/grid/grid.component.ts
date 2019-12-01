import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})

export class GridComponent implements OnInit {
    @Input() feeds: any;

    /**
     * Get tags array from string
     * @param tagStr tags string
     */
    getTags(tagStr: string) {
        return tagStr.split(' ');
    }

    ngOnInit() {
    }
}
