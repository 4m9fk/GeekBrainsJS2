/**
 * Created by Sirozhka on 27.02.2017.
 */
function Voter(options) {
    var elem = document.querySelector(options.elem);
    var votes = elem.querySelector('.vote').innerHTML;
    var u = elem.querySelector('.up');
     u.addEventListener('click', up);
    var d = elem.querySelector('.down');
     d.addEventListener('click', down);
    function up() {
        votes++; updateVotes();
    }

    function down() {
        votes--; updateVotes();
    }

    function updateVotes() {
        elem.querySelector('.vote').innerHTML  =  votes;
    }
    this.setVote = function (vote) {
        votes = vote;
        updateVotes();
    }

}