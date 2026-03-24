use chrono::{Local, Utc};

fn main() {
    let now_time = Utc::now();
    let local_time = Local::now();

    println!("utc time: {}", now_time);
    println!("local time: {}", local_time);
}
