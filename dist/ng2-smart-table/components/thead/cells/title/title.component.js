var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import { CompleterService } from 'ng2-completer';
var TitleComponent = (function () {
    function TitleComponent(completerService) {
        this.completerService = completerService;
        this.currentDirection = '';
        this.sort = new EventEmitter();
        this.autompleteSelect = new EventEmitter();
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.column.options) {
            this.selectedOption = this.column.title;
            this.dataService = this.completerService.local(this.column.options, 'title', 'title');
        }
        this.source.onChanged().subscribe(function (elements) {
            var sortConf = _this.source.getSort();
            if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                _this.currentDirection = sortConf[0]['direction'];
            }
            else {
                _this.currentDirection = '';
            }
            sortConf.forEach(function (fieldConf) {
            });
        });
    };
    TitleComponent.prototype.columnSelected = function (selectedItem) {
        if (selectedItem && selectedItem.originalObject) {
            var oldKey = this.column.id;
            var newKey = selectedItem.originalObject.value;
            if (oldKey !== newKey) {
                this.source.renameColumn(oldKey, newKey);
                this.autompleteSelect.emit({ column: this.column, selectedItem: selectedItem });
            }
        }
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    return TitleComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Column)
], TitleComponent.prototype, "column", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TitleComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TitleComponent.prototype, "autompleteSelect", void 0);
TitleComponent = __decorate([
    Component({
        selector: 'ng2-smart-table-title',
        styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc::after,a.sort.desc::after{content:'';display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px} /*# sourceMappingURL=title.component.css.map */ "],
        template: "\n    <div *ngIf=\"column.options\">\n          <ng2-completer\n            (selected)=\"columnSelected($event)\"\n            [datasource]=\"dataService\"\n            [(ngModel)]=\"selectedOption\"\n            placeholder=\"Set column name\"\n            [minSearchLength]=\"0\"></ng2-completer>\n    </div>\n\n    <a href=\"#\" *ngIf=\"!column.options && column.isSortable\"\n                (click)=\"_sort($event, column)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      <div *ngIf=\"column.title\">{{ column.title }}</div>\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.options && !column.isSortable\">{{ column.title }}</span>\n  "
    }),
    __metadata("design:paramtypes", [CompleterService])
], TitleComponent);
export { TitleComponent };
//# sourceMappingURL=title.component.js.map