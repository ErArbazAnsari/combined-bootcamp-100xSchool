use std::fs;

// enum Result<T, E> {
//     Ok(T),
//     Err(E),
// }

fn main() {
    let res = fs::read_to_string("./src/example.txt");
    match res {
        Ok(content) => {
            println!("file content: {}", content);
        }
        Err(err) => {
            println!("error: {}", err);
        }
    }
}
