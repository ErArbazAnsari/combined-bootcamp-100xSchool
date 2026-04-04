use std::rc::Rc;

fn main() {
    let shared_data = Rc::new("arbaz".to_string());
    let owner2 = Rc::clone(&shared_data);
    let owner3 = Rc::clone(&shared_data);

    println!("shared_data: {}", shared_data);
    println!("owner2: {}", owner2);
    println!("owner3: {}", owner3);
    println!("owners count: {}", Rc::strong_count(&shared_data));
    println!("owner2 count: {}", Rc::strong_count(&owner2));
    println!("owner3 count: {}", Rc::strong_count(&owner3));
    
}
