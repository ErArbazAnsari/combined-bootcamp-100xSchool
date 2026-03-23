struct User {
    active: bool,
    username: String,
    email: String,
    signin_count: u64,
}

fn main() {
    let user1 = User {
        active: true,
        username: String::from("arbazansari"),
        email: String::from("mail.arbazansari@gmail.com"),
        signin_count: 1,
    };

    println!("userinfo: {}", user1.active);
    println!("userinfo: {}", user1.username);
    println!("userinfo: {}", user1.email);
    println!("userinfo: {}", user1.signin_count);
}
