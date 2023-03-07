import Button from "./Button";

function Modal({ closeModal}) {

    function handleClick() {
        console.log('doing something very cool');
        closeModal();
    }

    function closeModalBgClick(e) {
        console.log('clicked anywhere');
        if (e.target.id === 'modal-bg') {
            console.log('clicked modal bg')
            console.log(e.target);
            closeModal();
        }
    }

    return ( 
    <div id="modal-bg" className="absolute top-0 left-0 w-screen h-screen bg-zinc-700/50 flex flex-col justify-center items-center" onClick={closeModalBgClick}>
        <div className="bg-white md:w-6/12 w-10/12 max-w-screen-md rounded-lg p-4 m-4 flex flex-col relative shadow-2xl">
            <a onClick={closeModal} className="absolute text-2xl right-5 hover:cursor-pointer">x</a>
            <h1 className="text-3xl pb-8">My Awesome Modal</h1>
            <div className="bg-orange-400 w-6/12 h-1 mx-auto mb-8"></div>
            <h2 className="text-xl italic text- pb-4">Made with Tailwind CSS</h2>
            <p className="p-4">Some text that is very important!</p> 
            <p className="p-4">Make sure to ready it till the end!</p>
            <Button handleClick={handleClick} text="Click Me"/>
        </div>

    </div>);
}

export default Modal;