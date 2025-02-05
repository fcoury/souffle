function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.632,-90.2400516],[89.63,-33.9900516]]).appendPoint([89.6299662,-33.0400428]).appendArc([90.1299531,-32.540025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1300131,-32.5390513]).appendArc([127.63,-32.0390513],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-28.29]).appendArc([128.13,-27.79],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.13,-27.79]).appendArc([146.63,-27.29],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-26.038]).appendArc([147.13,-25.538],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-25.538]).appendArc([167.532,-26.038],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-27.29]).appendArc([168.032,-27.79],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-27.79]).appendArc([186.532,-28.29],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-29.788]).appendArc([187.032,-30.288],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-30.288]).appendArc([205.5315782,-30.787778],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-31.7373561]).appendPoint([205.5321344,-32.040222]).appendArc([206.0321344,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.783,-32.54]).appendArc([226.283,-33.04],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-95.401]).appendArc([225.783,-95.901],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([224.4046626,-95.901]).appendPoint([149.9834385,-117.0099598]).appendArc([149.347,-116.5289354],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([149.347,-99.5088606]).appendArc([148.7548035,-99.0174343],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([124.7289189,-103.5249338]).appendArc([124.1655641,-103.2008692],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([123.6217181,-101.6698285]).appendArc([123.8544069,-101.0629987],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([139.3963017,-92.6294682]).appendArc([139.1578322,-91.69],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1320338,-91.69]).appendArc([89.6320338,-91.1900178],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-90.2400516]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.832,-90.2400089],[90.83,-33.9900089]]).appendPoint([90.8299911,-33.7400066]).appendPoint([128.3300131,-33.7390197]).appendArc([128.83,-33.2390197],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.83,-28.99]).appendPoint([147.33,-28.99]).appendArc([147.83,-28.49],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.83,-26.738]).appendPoint([166.332,-26.738]).appendPoint([166.332,-28.49]).appendArc([166.832,-28.99],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.332,-28.99]).appendPoint([185.332,-30.988]).appendArc([185.832,-31.488],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.331889,-31.488]).appendPoint([204.332,-31.737889]).appendPoint([204.3326671,-33.240222]).appendArc([204.8326671,-33.74],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.083,-33.74]).appendPoint([225.083,-94.701]).appendPoint([224.307308,-94.701]).appendArc([224.1708694,-94.7199755],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([150.547,-115.6027725]).appendPoint([150.547,-98.0627925]).appendArc([149.9548035,-97.5713662],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([125.0959796,-102.2351335]).appendPoint([124.9528622,-101.8322281]).appendPoint([144.1237895,-91.4294682]).appendArc([143.88532,-90.49],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.8320089,-90.49]).appendPoint([90.832,-90.2400089]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[210.779,-62.075],[218.779,-62.075]]).appendPoint([218.779,-19.175]).appendPoint([210.779,-19.175]).appendPoint([210.779,-62.075]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.632,-90.2400516],[89.63,-33.9900516]]).appendPoint([89.6299662,-33.0400428]).appendArc([90.1299531,-32.540025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1300131,-32.5390513]).appendArc([127.63,-32.0390513],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-28.29]).appendArc([128.13,-27.79],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.13,-27.79]).appendArc([146.63,-27.29],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-26.038]).appendArc([147.13,-25.538],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-25.538]).appendArc([167.532,-26.038],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-27.29]).appendArc([168.032,-27.79],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-27.79]).appendArc([186.532,-28.29],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-29.788]).appendArc([187.032,-30.288],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([205.0315782,-30.288]).appendArc([205.5315782,-30.787778],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([205.5319999,-31.7373561]).appendPoint([205.5321344,-32.040222]).appendArc([206.0321344,-32.54],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([225.783,-32.54]).appendArc([226.283,-33.04],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-95.401]).appendArc([225.783,-95.901],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([224.4046626,-95.901]).appendPoint([149.9834385,-117.0099598]).appendArc([149.347,-116.5289354],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([149.347,-99.5088606]).appendArc([148.7548035,-99.0174343],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([124.7289189,-103.5249338]).appendArc([124.1655641,-103.2008692],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([123.6217181,-101.6698285]).appendArc([123.8544069,-101.0629987],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([139.3963017,-92.6294682]).appendArc([139.1578322,-91.69],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.1320338,-91.69]).appendArc([89.6320338,-91.1900178],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.632,-90.2400516]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[164.6,-94.044],"radius":1.1})
.union(
    CAG.circle({"center":[120.357,-85.74],"radius":1.1})
).union(
    CAG.circle({"center":[185.468,-48.986],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-71.5],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-52.5],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function sofle_v2_bottom_tray_case_fn() {
                    

                // creating part 0 of case sofle_v2_bottom_tray
                let sofle_v2_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let sofle_v2_bottom_tray__part_0_bounds = sofle_v2_bottom_tray__part_0.getBounds();
                let sofle_v2_bottom_tray__part_0_x = sofle_v2_bottom_tray__part_0_bounds[0].x + (sofle_v2_bottom_tray__part_0_bounds[1].x - sofle_v2_bottom_tray__part_0_bounds[0].x) / 2
                let sofle_v2_bottom_tray__part_0_y = sofle_v2_bottom_tray__part_0_bounds[0].y + (sofle_v2_bottom_tray__part_0_bounds[1].y - sofle_v2_bottom_tray__part_0_bounds[0].y) / 2
                sofle_v2_bottom_tray__part_0 = translate([-sofle_v2_bottom_tray__part_0_x, -sofle_v2_bottom_tray__part_0_y, 0], sofle_v2_bottom_tray__part_0);
                sofle_v2_bottom_tray__part_0 = rotate([0,0,0], sofle_v2_bottom_tray__part_0);
                sofle_v2_bottom_tray__part_0 = translate([sofle_v2_bottom_tray__part_0_x, sofle_v2_bottom_tray__part_0_y, 0], sofle_v2_bottom_tray__part_0);

                sofle_v2_bottom_tray__part_0 = translate([-75,0,0], sofle_v2_bottom_tray__part_0);
                let result = sofle_v2_bottom_tray__part_0;
                
            

                // creating part 1 of case sofle_v2_bottom_tray
                let sofle_v2_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let sofle_v2_bottom_tray__part_1_bounds = sofle_v2_bottom_tray__part_1.getBounds();
                let sofle_v2_bottom_tray__part_1_x = sofle_v2_bottom_tray__part_1_bounds[0].x + (sofle_v2_bottom_tray__part_1_bounds[1].x - sofle_v2_bottom_tray__part_1_bounds[0].x) / 2
                let sofle_v2_bottom_tray__part_1_y = sofle_v2_bottom_tray__part_1_bounds[0].y + (sofle_v2_bottom_tray__part_1_bounds[1].y - sofle_v2_bottom_tray__part_1_bounds[0].y) / 2
                sofle_v2_bottom_tray__part_1 = translate([-sofle_v2_bottom_tray__part_1_x, -sofle_v2_bottom_tray__part_1_y, 0], sofle_v2_bottom_tray__part_1);
                sofle_v2_bottom_tray__part_1 = rotate([0,0,0], sofle_v2_bottom_tray__part_1);
                sofle_v2_bottom_tray__part_1 = translate([sofle_v2_bottom_tray__part_1_x, sofle_v2_bottom_tray__part_1_y, 0], sofle_v2_bottom_tray__part_1);

                sofle_v2_bottom_tray__part_1 = translate([-75,0,1], sofle_v2_bottom_tray__part_1);
                result = result.subtract(sofle_v2_bottom_tray__part_1);
                
            

                // creating part 2 of case sofle_v2_bottom_tray
                let sofle_v2_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let sofle_v2_bottom_tray__part_2_bounds = sofle_v2_bottom_tray__part_2.getBounds();
                let sofle_v2_bottom_tray__part_2_x = sofle_v2_bottom_tray__part_2_bounds[0].x + (sofle_v2_bottom_tray__part_2_bounds[1].x - sofle_v2_bottom_tray__part_2_bounds[0].x) / 2
                let sofle_v2_bottom_tray__part_2_y = sofle_v2_bottom_tray__part_2_bounds[0].y + (sofle_v2_bottom_tray__part_2_bounds[1].y - sofle_v2_bottom_tray__part_2_bounds[0].y) / 2
                sofle_v2_bottom_tray__part_2 = translate([-sofle_v2_bottom_tray__part_2_x, -sofle_v2_bottom_tray__part_2_y, 0], sofle_v2_bottom_tray__part_2);
                sofle_v2_bottom_tray__part_2 = rotate([0,0,0], sofle_v2_bottom_tray__part_2);
                sofle_v2_bottom_tray__part_2 = translate([sofle_v2_bottom_tray__part_2_x, sofle_v2_bottom_tray__part_2_y, 0], sofle_v2_bottom_tray__part_2);

                sofle_v2_bottom_tray__part_2 = translate([-75,0,0], sofle_v2_bottom_tray__part_2);
                result = result.union(sofle_v2_bottom_tray__part_2);
                
            

                // creating part 3 of case sofle_v2_bottom_tray
                let sofle_v2_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let sofle_v2_bottom_tray__part_3_bounds = sofle_v2_bottom_tray__part_3.getBounds();
                let sofle_v2_bottom_tray__part_3_x = sofle_v2_bottom_tray__part_3_bounds[0].x + (sofle_v2_bottom_tray__part_3_bounds[1].x - sofle_v2_bottom_tray__part_3_bounds[0].x) / 2
                let sofle_v2_bottom_tray__part_3_y = sofle_v2_bottom_tray__part_3_bounds[0].y + (sofle_v2_bottom_tray__part_3_bounds[1].y - sofle_v2_bottom_tray__part_3_bounds[0].y) / 2
                sofle_v2_bottom_tray__part_3 = translate([-sofle_v2_bottom_tray__part_3_x, -sofle_v2_bottom_tray__part_3_y, 0], sofle_v2_bottom_tray__part_3);
                sofle_v2_bottom_tray__part_3 = rotate([0,0,0], sofle_v2_bottom_tray__part_3);
                sofle_v2_bottom_tray__part_3 = translate([sofle_v2_bottom_tray__part_3_x, sofle_v2_bottom_tray__part_3_y, 0], sofle_v2_bottom_tray__part_3);

                sofle_v2_bottom_tray__part_3 = translate([-75,0,0], sofle_v2_bottom_tray__part_3);
                result = result.subtract(sofle_v2_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return sofle_v2_bottom_tray_case_fn();
            }

        