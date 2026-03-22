fn main() {
    for i in 0..11 {
        print!("{} ", i);
    }

    // arrays, maps, strings
    let sentence = String::from("my name is arbaz");
    let first_word = get_first_word(sentence);
    println!("\nfirst word is: {}", first_word);
}

fn get_first_word(sentence: String) -> String {
    let mut word = String::from("");

    for i in sentence.chars() {
        if i == ' ' {
            break;
        }
        word.push_str(i.to_string().as_str());
    }
    return word;
}
