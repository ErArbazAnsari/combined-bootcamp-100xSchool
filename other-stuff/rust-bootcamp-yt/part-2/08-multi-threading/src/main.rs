use std::thread;
use std::time::Duration;

fn main() {
    thread::spawn(|| {
        for _ in 1..10 {
            println!("from 1st loop");
            thread::sleep(Duration::from_millis(1000));
        }
    });
    thread::spawn(|| {
        for _ in 1..10 {
            println!("from 2nd loop");
            thread::sleep(Duration::from_millis(1000));
        }
    });

    for _ in 1..10 {
        println!("from 3rd loop");
        thread::sleep(Duration::from_millis(1000));
    }
}
