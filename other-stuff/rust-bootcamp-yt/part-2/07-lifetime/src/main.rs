// fn main() {
//     let ans;

//     let str1 = String::from("arbazansari");
//     {
//         let str2 = String::from("ansari");
//         ans = find_longest(str1, str2);
//     }
//     println!("longest string is: {}", ans);
// }

// fn find_longest(str1: String, str2: String) -> String {
//     if str1.len() > str2.len() {
//         return str1;
//     }
//     str2
// }

// *****************************
fn main() {
    let ans;

    let str1 = String::from("arbazansari");
    {
        let str2 = String::from("ansari");
        ans = find_longest(&str1, &str2); // borrowed value does not live long enough
    }
    println!("longest string is: {}", ans);
}

fn find_longest<'a>(str1: &'a str, str2: &'a str) -> &'a str {
    if str1.len() > str2.len() {
        return str1;
    }
    str2
}
