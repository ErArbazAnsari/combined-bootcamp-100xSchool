use std::fs::read_to_string;

// enum Result<T, E> {
//     Ok(T),
//     Err(E),
// }

// enum Option<T>{
//
//     None,
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
