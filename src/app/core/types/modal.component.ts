import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

export abstract class ModalComponent<T> {
  data?: T;

  constructor(public activeModal: NgbActiveModal) {
  }

  public abstract setData(obj: T);

  public closeModal() {
    this.activeModal.close(false);
  }
}
