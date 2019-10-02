
$(document).ready(function() {

    window.stringifyUnixTime = function(unixTimestamp) {
        if (typeof unixTimestamp === "undefined") return "n/a";
        return moment(unixTimestamp).calendar();
    };

    window.handleData = function(data) {
        let container = $("#results-container");
        container.html("");
        for (let row of data.rows) {
            let node = $(`
                <div class="row" style="display: none">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div class="card card-signin my-2">
                            <div class="card-body">
                                <div class="hide-on-search">
                                    <h5>${row.name} (${row.lectureType})</h5>
                                </div>
                                <div class="hide-on-search">
                                    ${row.currentMembers} of ${row.maxMembers} enrolled
                                </div>
                                <div class="hide-on-search">
                                    Enrollment opens: ${window.stringifyUnixTime(row.freeForEnroll.start)}
                                </div>
                                <div class="hide-on-search">
                                    Enrollment closes: ${window.stringifyUnixTime(row.freeForEnroll.end)}
                                </div>
                                <div class="hide-on-search">
                                    ${row.comment}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
            container.append(node);
            node.fadeIn();
        }
    };

    $("#form-id-submit").click(function(e) {

        anime({
            targets: [".hide-on-search"],
            duration: 300,
            easing: "easeInOutSine",
            scale: 0,
            height: 0,
        });

        let id = $("#input-lecture-id").val();

        $.get("https://jsexam.herokuapp.com/lectures?id=" + id, {}, function(data) {

            window.handleData(data);
        });

    })

});
