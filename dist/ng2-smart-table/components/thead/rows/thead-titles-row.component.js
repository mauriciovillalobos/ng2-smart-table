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
import { Grid } from '../../../lib/grid';
var TheadTitlesRowComponent = (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.titleChange = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    return TheadTitlesRowComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TheadTitlesRowComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "sort", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "titleChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
TheadTitlesRowComponent = __decorate([
    Component({
        selector: '[ng2-st-thead-titles-row]',
        template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"grid.isMultiSelectVisible()\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"grid.showActionColumn('left')\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\">\n      <ng2-st-column-title\n        [source]=\"source\"\n        [column]=\"column\"\n        (sort)=\"sort.emit($event)\"\n        (autompleteSelect)=\"titleChange.emit($event)\">\n      </ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"grid.showActionColumn('right')\" [grid]=\"grid\"></th>\n  ",
    })
], TheadTitlesRowComponent);
export { TheadTitlesRowComponent };
//# sourceMappingURL=thead-titles-row.component.js.map