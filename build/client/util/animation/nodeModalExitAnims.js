"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitAnimations = void 0;
/**
 * This function is called when the modal is closed
 * It animates the modal out of view using css animations
 * The modal is removed from the dom after the animation is complete
 * If the user clicks on the clickable overlay, the modal will close immediately
 * @param e - The click event
 * @param modal - The modal element
 * @param modalOverlay - The modal overlay element
 * @param podsView - The pods view element
 * @param setModalOpen - The function that sets the modal open state
 */
const exitAnimations = (e, modal, modalOverlay, podsView, setModalOpen) => {
    if (e.target instanceof HTMLElement &&
        e.target.className !== 'nodeClickableOverlay') {
        //* Since typescript doesn't know that the refs are not null or not valid elements,
        //* we have to cast them as HTMLElements to make typescript happy
        modal.classList.add('CloseModalAnimation');
        podsView.classList.add('Opacity-Out');
        modalOverlay.classList.add('Opacity-Out');
        setTimeout(() => {
            setModalOpen(false);
            modal.classList.remove('CloseModalAnimation');
            podsView.classList.remove('Opacity-Out');
            modalOverlay.classList.remove('Opacity-Out');
        }, 400);
    }
    else {
        setModalOpen(false);
    }
};
exports.exitAnimations = exitAnimations;
