Process.enumerateModules({
    onMatch: function(module) {
        console.log("[*] Module name:", module.name);
        console.log("[*] Module base:", module.base);

        Module.enumerateExports(module.name, {
            onMatch: function(exportDetails) {
                console.log("[+] Export name:", exportDetails.name);
                console.log("[+] Export address:", exportDetails.address);
            },
            onComplete: function() {}
        });
    },
    onComplete: function() {}
});
