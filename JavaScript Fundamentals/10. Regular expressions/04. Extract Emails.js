function extractEmails(email){
    let regex = /(?<!\S)[A-Za-z]+([\.\-\_]*[a-zA-Z]+)*@[a-zA-z]+([\.\-]*[A-Za-z]+)*(\.[a-zA-Z]+)/g;

    let result = email.match(regex)
    for (let line of result) {
        console.log(line);
    }
}
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`)
