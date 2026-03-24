use std::collections::HashMap;
fn main() {
    // hm => help to store key value pair
    let mut data = HashMap::new();

    data.insert(String::from("arbaz"), 22);
    data.insert(String::from("vivek"), 20);

    let user_info = data.get("ansari");
    match user_info {
        Some(data) => println!("{}", data),
        _ => println!("not found!"),
    }
}
