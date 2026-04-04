use std::rc::Rc;

fn count_owners(n: usize) -> usize {
    // Create Rc, clone it n times, return strong_count
    let data = Rc::new("shared".to_string());
    let mut clones = Vec::new();

    for _ in 0..n {
        clones.push(Rc::clone(&data));
    }
    Rc::strong_count(&data)
}

fn main() {
    println!("{} owners", count_owners(1000));
}
