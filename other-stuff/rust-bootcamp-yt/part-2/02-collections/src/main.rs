fn main() {
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);
    vec.push(3);

    println!("{:?}", vec);
    println!("{}", vec[0]);

    // print only even
    // println!("{:?}", print_only_even(vec));

    // doing inplace
    println!("{:?}", only_even(&mut vec));
    println!("{:?}", vec);
}

fn print_only_even(arr: Vec<i32>) -> Vec<i32> {
    let mut ans = Vec::new();
    for ele in arr {
        if ele % 2 == 0 {
            ans.push(ele);
        }
    }
    return ans;
}

fn only_even(vec: &mut Vec<i32>) {
    let mut i = 0;
    while i < vec.len() {
        if vec[i] % 2 != 0 {
            vec.remove(i);
        }
        i += 1;
    }
}
