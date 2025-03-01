def human_years_cat_years_dog_years(human_years):
    first = 15
    second = 24

    if human_years <= 1:
        years = [human_years, first, first]
    elif human_years <= 2:
        years = [human_years, second, second]
    else:
        cat = 0
        dog = 0
        remaining_years = human_years - 2
        for year in range(remaining_years):
            cat += 4
            dog += 5
        years = [human_years, second + cat, second + dog]
    return years