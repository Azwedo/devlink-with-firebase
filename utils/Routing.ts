export const ActiveSidebarLink = (pathname: string, target: string) => {
    const pathlink = pathname
    const pathlinks = pathlink.split("/")

    if(pathname.split("/").length === 2) {
        return pathlinks[1] === target;
    }

    return pathlinks[2] === target;
}