fn main() {
    let mut data = vec![1, 2, 3, 4, 5];
    let iter = data.iter();

    for ele in iter {
        print!("{} ", ele);
    }

    // anoter way
    let mut it = data.iter_mut();

    for val in it {
        *val = *val + 1;
    }
    println!("\n{:?}", data);

    // iterators
    // consuming iterator
    let itt = data.iter();
    let sum: i32 = itt.sum(); // this sum consume itt we can't use it anymore!
    println!("sum is: {}", sum);

    // map iterator
    let map_it = data.iter();
    let map_it2 = map_it.map(|x| x * 5);
    for x in map_it2 {
        print!("{} ", x);
    }

    // filter iterator
    let map_it3 = data.iter();
    let map_it4 = map_it3.filter(|x| *x % 2 != 0);
    for x in map_it4 {
        print!("\nfilter-> {} ", x);
    }
}
